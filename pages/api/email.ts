import base64 from "base64-url";
import dayjs from "dayjs";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

const EMAIL_ADDRESS = "toni@huvimestari.fi";
const GMAIL_API_URL = "https://www.googleapis.com/auth/gmail.send";

interface BookingData {
  activity: string;
  attendees: number;
  date: string;
  email: string;
  name: string;
  note: string;
  phone: string;
  time: string;
}

interface ContactData {
  email?: string;
  message?: string;
  phone?: string;
}

interface NewsLetterData {
  email?: string;
}

interface BookingRequestData {
  type: "booking";
  content: BookingData;
}

interface ContactRequestData {
  type: "contact";
  content: ContactData;
}

interface NewsLetterRequestData {
  type: "newsletter";
  content: NewsLetterData;
}

const createBookingEmailContent = (data: BookingData) => {
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

const createContactEmailContent = (data: ContactData) =>
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

const createNewsLetterEmailContent = (data: NewsLetterData) =>
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

const sendEmail = async (content: string) => {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: BookingRequestData | ContactRequestData | NewsLetterRequestData =
    req.body;
  let success = false;

  switch (data.type) {
    case "booking":
      await sendEmail(createBookingEmailContent(data.content)).then(() => {
        success = true;
      });
      break;
    case "contact":
      await sendEmail(createContactEmailContent(data.content)).then(() => {
        success = true;
      });
      break;
    case "newsletter":
      await sendEmail(createNewsLetterEmailContent(data.content)).then(() => {
        success = true;
      });
      break;
    default:
      res.status(400).json("Invalid input");
  }

  if (success) res.status(200).json("Success");
  else res.status(500).json("Failure");
}
