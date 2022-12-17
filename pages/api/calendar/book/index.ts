import { NextApiRequest, NextApiResponse } from "next";
import { createBooking } from "./utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  const bookingStatus = await createBooking(req.body.payload)

  if (bookingStatus === 401) return res.status(401).send("Unauthorized to create a booking");

  return res.status(201).send(true);
};

export default handler;
