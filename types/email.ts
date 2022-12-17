import { Booking } from "./calendar";

export interface Contact {
  email?: string;
  message?: string;
  phone?: string;
}

export interface NewsLetter {
  email?: string;
}

export interface BookingRequest {
  type: "booking";
  content: Booking;
}

export interface ContactRequest {
  type: "contact";
  content: Contact;
}

export interface NewsLetterRequest {
  type: "newsletter";
  content: NewsLetter;
}
