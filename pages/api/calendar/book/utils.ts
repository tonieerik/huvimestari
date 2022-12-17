import dayjs from "dayjs";
import { google } from "googleapis";
import { TIMEZONE } from "const";
import { Booking } from "types/calendar";
import { CALENDAR_ID_PRIMARY, GCALENDAR_API_URL } from "../const";

export const createBooking = async (data: Booking): Promise<201 | 401> => {
  const start = dayjs(data.date + "T" + data.time.replace(".", ":") + ":00");
  const end = dayjs(start).add(
    15 + 15 * (data.attendees ? data.attendees : 1),
    "minutes"
  );
  let result = false;

  const event = {
    description:
      "Varauksen tiedot:\n" +
      "Elämys: " +
      data.activity +
      "\n" +
      "Ajankohta: " +
      start.format("D.M.YYYY HH.mm") +
      "\n" +
      "Osallistujien määrä: " +
      data.attendees +
      "\n" +
      "Varaajan nimi: " +
      data.name +
      "\n" +
      "Sähköpostiosoite: " +
      data.email +
      "\n" +
      "Puhelinnumero: " +
      data.phone +
      "\n" +
      "Huomioitavaa: " +
      (data.note ? data.note : ""),
    summary: "?? " + data.activity,
    start: {
      dateTime: start.format("YYYY-MM-DD") + "T" + start.format("HH:mm:ss"),
      timeZone: TIMEZONE,
    },
    end: {
      dateTime: end.format("YYYY-MM-DD") + "T" + end.format("HH:mm:ss"),
      timeZone: TIMEZONE,
    },
  };

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
      return 401;
    }
  });

  const calendar = google.calendar("v3");

  // Make an authorized request to create a new event to Google Calendar
  calendar.events.insert(
    {
      auth: jwtClientCalendar,
      calendarId: CALENDAR_ID_PRIMARY,
      requestBody: event,
    },
    (err: any, event: any) => {
      if (err) {
        console.error(
          "createBooking(" +
            data.email +
            "/" +
            data.phone +
            "/" +
            data.activity +
            "/" +
            start +
            ") - " +
            err
        );
        result = false;
      } else if (event) {
        result = true;
      }
    }
  );

  return 201;
};
