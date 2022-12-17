import base64 from "base64-url";
import dayjs from "dayjs";
import { google } from "googleapis";
import { Booking } from "types/calendar";
import { Contact, NewsLetter } from "types/email";

const EMAIL_ADDRESS = "toni@huvimestari.fi";
const GMAIL_API_URL = "https://www.googleapis.com/auth/gmail.send";

export const createBookingEmailContent = (data: Booking) => {
  const dateTime = dayjs(data.date).format("D.M.YYYY") + " klo " + data.time;

  return [
    "Content-Type: text/plain; charset=utf-8\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "To: toni@huvimestari.fi\n",
    "Sender: Huvimestari <toni@huvimestari.fi>\n",
    "From: " + data.email + "\n",
    "Reply-To: " + data.email + "\n",
    "Subject: =?utf-8?B?" +
      base64.encode(
        "Huvimestari, varauspyyntö: " + data.activity + " / " + dateTime
      ) +
      "?=" +
      "\n\n",
    "Varauspyynnön tiedot:\n",
    "Elämys: " + data.activity + "\n",
    "Ajankohta: " + dateTime + "\n",
    "Osallistujien määrä: " + data.attendees + "\n",
    "Varaajan nimi: " + data.name + "\n",
    "Sähköpostiosoite: " + data.email + "\n",
    "Puhelinnumero: " + data.phone + "\n",
    "Huomioitavaa: " + (data.note ? data.note : ""),
  ].join("");
};

export const createContactEmailContent = (data: Contact) =>
  [
    "Content-Type: text/plain; charset=utf-8\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "To: toni@huvimestari.fi\n",
    "Sender: Huvimestari <toni@huvimestari.fi>\n",
    "From: " + data.email + "\n",
    "Reply-To: " + data.email + "\n",
    "Subject: Huvimestari, viesti verkkosivuilta\n\n",
    "Sähköpostiosoite: " + (data.email || "-") + "\n",
    "Puhelinnumero: " + (data.phone || "-") + "\n",
    "Viesti: \n" + (data.message || "-"),
  ].join("");

export const createNewsLetterEmailContent = (data: NewsLetter) =>
  [
    "Content-Type: text/plain; charset=utf-8\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "To: toni@huvimestari.fi\n",
    "Sender: Huvimestari <toni@huvimestari.fi>\n",
    "From: " + data.email + "\n",
    "Reply-To: " + data.email + "\n",
    "Subject: Huvimestari, liity postituslistalle\n\n",
    "Sähköpostiosoite: " + (data.email || "-") + "\n",
  ].join("");

export const sendEmail = async (content: string) => {
  const gmail = google.gmail("v1");
  const safe = base64.escape(base64.encode(content));
  const jwtClientGmail = new google.auth.JWT(
    process.env.GMAIL_EMAIL,
    undefined,
    process.env.GMAIL_PRIVATE_KEY?.replaceAll(`"`, ``).replaceAll(`\\n`, `\n`),
    [GMAIL_API_URL],
    EMAIL_ADDRESS
  );

  await jwtClientGmail.authorize(
    (err: Error | null) => err && console.error(err)
  );

  return gmail.users.messages.send({
    auth: jwtClientGmail,
    userId: EMAIL_ADDRESS,
    requestBody: { raw: safe },
  });
};
