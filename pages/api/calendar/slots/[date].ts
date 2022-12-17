import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { TIMEZONE } from "const";
import { getSlotMap, strMapToObj, updateFreeSlots } from "./utils";
import {
  CALENDAR_ID_PRIMARY,
  CALENDAR_ID_SECONDARY,
  GCALENDAR_API_URL,
} from "../const";

dayjs.extend(utc);
dayjs.extend(timezone);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).send("Only GET allowed");

  if (!req.query.date || typeof req.query.date !== "string")
    return res.status(400).send("Invalid parameters");

  const [yyyy, mm, dd] = req.query.date.split("-");

  if (
    !dd ||
    !mm ||
    !yyyy ||
    dd.length !== 2 ||
    mm.length !== 2 ||
    yyyy.length !== 4
  ) {
    console.error("Invalid date params: " + yyyy + "-" + mm + "-" + dd);
    return res.status(400).send("Invalid parameters");
  }

  const jwtClientCalendar = new google.auth.JWT(
    process.env.GCALENDAR_EMAIL,
    undefined,
    process.env.GCALENDAR_PRIVATE_KEY?.replaceAll(`"`, ``).replaceAll(
      `\\n`,
      `\n`
    ),
    [GCALENDAR_API_URL]
  );

  jwtClientCalendar.authorize((err) => {
    if (err) {
      console.error(err);
      return res.status(401).send("Unauthorized");
    }
  });

  const calendar = google.calendar("v3");

  let freeSlots = getSlotMap();
  let error = false;

  await calendar.events
    .list({
      auth: jwtClientCalendar,
      calendarId: CALENDAR_ID_PRIMARY,
      timeZone: TIMEZONE,
      timeMin: dayjs(yyyy + mm + dd)
        .tz(TIMEZONE)
        .startOf("day")
        .format(),
      timeMax: dayjs(yyyy + mm + dd)
        .tz(TIMEZONE)
        .endOf("day")
        .format(),
    })
    .then((listResult) => {
      updateFreeSlots(listResult, freeSlots, yyyy, mm, dd);
    })
    .catch((e) => {
      freeSlots = new Map();
      error = true;
      console.error(
        "calendar.events.list (id: " + CALENDAR_ID_PRIMARY + ") - " + e
      );
    });

  await calendar.events
    .list({
      auth: jwtClientCalendar,
      calendarId: CALENDAR_ID_SECONDARY,
      timeZone: TIMEZONE,
      timeMin: dayjs(yyyy + mm + dd)
        .tz(TIMEZONE)
        .startOf("day")
        .format(),
      timeMax: dayjs(yyyy + mm + dd)
        .tz(TIMEZONE)
        .endOf("day")
        .format(),
    })
    .then((listResult) => {
      updateFreeSlots(listResult, freeSlots, yyyy, mm, dd);
    })
    .catch((e) => {
      freeSlots = new Map();
      error = true;
      console.error(
        "calendar.events.list (id: " + CALENDAR_ID_SECONDARY + ") - " + e
      );
    });

  if (error) res.send(500);

  res.json(JSON.stringify(strMapToObj(freeSlots)));
};

export default handler;
