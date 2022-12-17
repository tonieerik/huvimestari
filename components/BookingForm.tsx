import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/fi";
import PulseLoader from "react-spinners/PulseLoader";
import { Booking } from "types/calendar";
import {
  ACTIVITIES,
  ACTIVITY_RAPPELLING,
  ACTIVITY_PENDULUM,
  DATE_FORMAT,
  DATE_FORMAT_PRINT,
  TIMEZONE,
} from "../const";
import * as ga from "../lib/ga";
import AttendeeDropdown from "./AttendeeDropdown";

dayjs.locale("fi");
dayjs.extend(utc);
dayjs.extend(timezone);

interface BookingFormProps {
  activity: number;
  date: string;
  maxAttendees: number;
  time: string;
  setSubmitted: (submitted: boolean) => void;
}

const PRICES = [
  { id: ACTIVITY_RAPPELLING, basePrice: 150, personPrice: 35 },
  { id: ACTIVITY_PENDULUM, basePrice: 100, personPrice: 30 },
];

const getTime = (minutes: number) => {
  const time = dayjs().hour(0).minute(minutes).second(0);
  let ret = "";

  if (parseInt(time.format("H"))) {
    ret = time.format("H") + " tunti";
  }

  if (parseInt(time.format("m"))) {
    ret += (ret !== "" ? " " : "") + time.format("m") + " minuuttia";
  }

  return ret;
};

const BookingForm = ({
  activity,
  date,
  maxAttendees,
  time,
  setSubmitted,
}: BookingFormProps) => {
  const [attendees, setAttendees] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [giftCard, setGiftCard] = useState("");
  const [invalid, setInvalid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [phone, setPhone] = useState("");

  const getPrice = (attendees: number) => {
    return (
      (PRICES.find((x) => x.id === activity)?.basePrice || 0) +
      (attendees - 1) *
        (PRICES.find((x) => x.id === activity)?.personPrice || 0)
    );
  };

  useEffect(() => {
    if (name !== "" && email !== "" && phone !== "") setInvalid(false);
    else setInvalid(true);
  }, [name, email, phone]);

  const onSubmit = async () => {
    setLoading(true);

    const payload: { payload: Booking } = {
      payload: {
        activity: ACTIVITIES.find((act) => act.id === activity)?.title || "",
        attendees,
        date: dayjs(date).format(DATE_FORMAT),
        email,
        name,
        note: note + (giftCard !== "" ? "\n\nLahjakortti: " + giftCard : ""),
        phone,
        time,
      },
    };

    try {
      const resBook = await fetch("/api/calendar/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resEmail = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "booking", content: payload.payload }),
      });

      if (resBook.status === 201 && resEmail.status === 201) {
        const price = getPrice(attendees);

        ga.event({
          action: "purchase",
          params: {
            currency: "EUR",
            tax: price * 0.24,
            transaction_id: "T_" + dayjs().tz(TIMEZONE).unix(),
            value: price,
            items: [
              {
                id: activity === ACTIVITY_RAPPELLING ? "KL" : "SK",
                name:
                  activity === ACTIVITY_RAPPELLING
                    ? "Köysilaskeutuminen"
                    : "Siltakeinu",
                quantity: 1,
                price,
              },
            ],
          },
        });

        setSubmitted(true);
        setAttendees(1);
        setEmail("");
        setError("");
        setGiftCard("");
        setInvalid(true);
        setName("");
        setNote("");
        setPhone("");
      } else {
        setError(
          "HUPS! Virhe varauspyyntöä lähettäessä, ole hyvä ja laita varaustietosi sähköpostitse toni@huvimestari.fi tai soita 0400 627 010. Ilmoitathan samalla virheestä, että voimme korjata sen ensitilassa!"
        );
      }
    } catch (e) {
      setError(
        "HUPS! Virhe varauspyyntöä lähettäessä, ole hyvä ja laita varaustietosi sähköpostitse toni@huvimestari.fi tai soita 0400 627 010. Ilmoitathan samalla virheestä, että voimme korjata sen ensitilassa!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8">
        <div>
          <div>
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              Tee varaus
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <div className="mt-1 block text-base font-medium text-gray-800">
              Elämys:{" "}
              {activity === ACTIVITY_RAPPELLING &&
                "Köysilaskeutuminen, mäkihyppytorni"}
              {activity === ACTIVITY_PENDULUM && "Siltakeinu, Kinakuja"}
            </div>
            <div className="my-2 block text-base font-medium text-gray-800">
              Ajankohta: {dayjs(date).format(DATE_FORMAT_PRINT)}
              {" klo "}
              {time}
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Osallistujamäärä <span className="text-orange">*</span>{" "}
              <span className="mt-1 text-xs font-normal text-gray-500">
                (Mahdollisimman tarkka arvio elämykseen osallistuvista)
              </span>
            </label>

            <div className="mt-1">
              <AttendeeDropdown
                onChange={setAttendees}
                maxAttendees={maxAttendees}
                value={attendees}
              />
            </div>
            <div className="m-1 text-xs text-gray-500">
              Kesto noin {getTime(15 + attendees * 15)}
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Varaajan nimi <span className="text-orange">*</span>
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Puhelinnumero <span className="text-orange">*</span>
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Sähköpostiosoite <span className="text-orange">*</span>
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Lahjakortin koodi
            </label>
            <div className="mt-1">
              <input
                id="giftcard"
                name="giftcard"
                type="text"
                onChange={(e) => setGiftCard(e.target.value)}
                value={giftCard}
                className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Huomioitavaa
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={4}
                onChange={(e) => setNote(e.target.value)}
                value={note}
                className="shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Jos osallistujamäärä ei ole tarkkaan tiedossa, merkkaa arvioitu
              maksimimäärä ja kirjoita tähän kuinka moni todennäköisesti
              osallistuu. Voit myös halutessasi kirjoittaa muita terveisiä
              ohjaajalle etukäteen.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 grid gap-y-4 gap-x-4 grid-cols-6">
        <div className="col-span-4 text-gray-700 flex items-center">
          <div>
            <div className="font-bold">
              Hinta yhteensä: {getPrice(attendees)} €
            </div>
            <div className="text-xs text-gray-500">
              Maksu paikan päällä (kortti / MobilePay)
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="button"
            disabled={invalid || loading}
            onClick={onSubmit}
            className={
              "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white" +
              (invalid ? " text-gray-300 bg-gray-100" : " bg-orange")
            }
          >
            {error !== ""
              ? "VARAUS EPÄONNISTUI"
              : loading
              ? "LÄHETETÄÄN "
              : "TEE VARAUS"}{" "}
            <PulseLoader loading={loading} color="white" size="5" />
          </button>
        </div>
        {error ? (
          <div className="col-span-6 text-sm text-orange">{error}</div>
        ) : (
          <div className="col-span-6 text-sm text-gray-500">
            Saat vahvistusviestin sähköpostiisi vuorokauden sisällä.
          </div>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
