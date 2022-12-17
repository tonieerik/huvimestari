import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { GaxiosResponse } from "gaxios";
import { calendar_v3 } from "googleapis";
import { TIMEZONE } from "const";
import { Event } from "types/calendar";

dayjs.extend(utc);
dayjs.extend(timezone);

const MIN_HOUR = 8;
const MAX_HOUR = 21;
const SLOT_PADDING_BEFORE = 5;
const SLOT_PADDING_AFTER = 4;

const ACTIVITY_RAPPELLING = 1;
const ACTIVITY_PENDULUM = 2;
const ACTIVITY_CLIMBING = 3;
const ACTIVITY_RAPPELLING_TITLE = "Köysilaskeutuminen";
const ACTIVITY_PENDULUM_TITLE = "Siltakeinu";
const ACTIVITY_CLIMBING_TITLE = "Kalliokiipeily";

const getActivityId = (event: Event) => {
  if (!event.title) return null;

  if (event.title.includes(ACTIVITY_RAPPELLING_TITLE)) {
    return ACTIVITY_RAPPELLING;
  } else if (event.title.includes(ACTIVITY_PENDULUM_TITLE)) {
    return ACTIVITY_PENDULUM;
  } else if (event.title.includes(ACTIVITY_CLIMBING_TITLE)) {
    return ACTIVITY_CLIMBING;
  }

  return null;
};

export const strMapToObj = (strMap: any) => {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
};

// Create a map of free time slots for the current day (default: all activities available at all times)
export const getSlotMap = () => {
  const map = new Map();

  for (let h = MIN_HOUR; h < MAX_HOUR; h++) {
    for (let m = 0; m < 60; m += 15)
      map.set((h < 10 ? "0" + h : h) + "." + (m < 10 ? "0" + m : m), [
        ACTIVITY_RAPPELLING,
        ACTIVITY_PENDULUM,
      ]);
  }

  return map;
};

export const updateFreeSlots = (
  res: GaxiosResponse<calendar_v3.Schema$Events>,
  freeSlots: any,
  yyyy: string,
  mm: string,
  dd: string
) => {
  const busyEvents: Event[] = [];
  const events = res.data.items;

  if (events && events?.length > 0) {
    // Get items marked 'busy'
    for (let i = 0; i < events.length; i++) {
      if (events[i].transparency !== "transparent") {
        // All-day event found -> no free slots available for the day
        if (
          events[i].start?.date ||
          (dayjs(yyyy + mm + dd)
            .tz(TIMEZONE)
            .startOf("day")
            .isAfter(dayjs(events[i].start?.dateTime).tz(TIMEZONE)) &&
            dayjs(yyyy + mm + dd)
              .tz(TIMEZONE)
              .endOf("day")
              .isBefore(dayjs(events[i].end?.dateTime).tz(TIMEZONE)))
        ) {
          freeSlots.clear();
          busyEvents.length = 0;
          break;
        } else {
          busyEvents.push({
            title: events[i].summary || "",
            startDateTime: events[i].start?.dateTime || "",
            endDateTime: events[i].end?.dateTime || "",
          });
        }
      }
    }
  }

  const slotKeys = [...freeSlots.keys()];

  busyEvents.forEach((e) => {
    if (!e.startDateTime || !e.endDateTime) {
      return;
    }

    // start/end time in format HH.mm
    const startTime = dayjs(e.startDateTime, "YYYY-MM-DDTHH:mm:ss+Z")
      .tz(TIMEZONE)
      .format("HH.mm");
    const endTime = dayjs(e.endDateTime, "YYYY-MM-DDTHH:mm:ss+Z")
      .tz(TIMEZONE)
      .format("HH.mm");

    // remove dots and convert times to integers for easy comparison
    const start = parseInt(startTime.replace(".", ""));
    const end = parseInt(endTime.replace(".", ""));

    // find start/end slot indices (TODO: check these once more)
    let startSlot = slotKeys.findIndex(
      (slot) => start <= parseInt(slot.replace(".", ""))
    );
    startSlot =
      startSlot === -1
        ? start <= MIN_HOUR * 100
          ? 0
          : slotKeys.length
        : startSlot;
    let endSlot = slotKeys.findIndex(
      (slot) => end <= parseInt(slot.replace(".", ""))
    );
    endSlot =
      endSlot === -1 ? (end >= MAX_HOUR * 100 ? slotKeys.length : 0) : endSlot;

    // block calendar for those time slots
    for (let i = startSlot - 1; i < endSlot; i++) {
      freeSlots.set(slotKeys[i], []);
    }

    const activityId = getActivityId(e);

    // take care that two different sort of activities cannot be booked too close to each other
    const paddingSlotsBefore = slotKeys.slice(
      startSlot - (SLOT_PADDING_BEFORE - (activityId ? 0 : 1)),
      startSlot
    );
    const paddingSlotsAfter = slotKeys.slice(
      endSlot,
      endSlot + (SLOT_PADDING_AFTER - (activityId ? 0 : 1))
    );

    paddingSlotsBefore.forEach((slot) => {
      freeSlots.set(
        slot,
        freeSlots.get(slot).includes(activityId) ? [activityId] : []
      );
    });

    paddingSlotsAfter.forEach((slot) => {
      freeSlots.set(
        slot,
        freeSlots.get(slot).includes(activityId) ? [activityId] : []
      );
    });
  });
};
