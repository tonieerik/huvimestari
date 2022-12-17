export interface Booking {
  activity: string;
  attendees: number;
  date: string;
  email: string;
  name: string;
  note: string;
  phone: string;
  time: string;
}

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
