import { NextApiRequest, NextApiResponse } from "next";
import {
  BookingRequest,
  ContactRequest,
  NewsLetterRequest,
} from "types/email";
import {
  createBookingEmailContent,
  createContactEmailContent,
  createNewsLetterEmailContent,
  sendEmail,
} from "./utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: BookingRequest | ContactRequest | NewsLetterRequest =
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

  if (success) res.status(201).json("Success");
  else res.status(500).json("Failure");
};

export default handler;
