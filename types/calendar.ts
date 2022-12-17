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

export interface Event {
  title: string;
  startDateTime: string;
  endDateTime: string;
}
