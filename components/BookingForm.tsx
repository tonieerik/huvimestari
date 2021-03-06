import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fi";
import PulseLoader from "react-spinners/PulseLoader";
import {
  ACTIVITIES,
  ACTIVITY_RAPPELLING,
  ACTIVITY_PENDULUM,
  DATE_FORMAT,
  DATE_FORMAT_PRINT,
} from "../const";
import * as ga from "../lib/ga";
import AttendeeDropdown from "./AttendeeDropdown";

dayjs.locale("fi");

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

    const payload = {
      payload: {
        activity: ACTIVITIES.find((act) => act.id === activity)?.title,
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
      const res = await fetch(
        "https://gcalendar-booking.herokuapp.com/create-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.status === 200) {
        const price = getPrice(attendees);

        ga.event({
          action: "purchase",
          params: {
            currency: "EUR",
            tax: price * 0.24,
            transaction_id: "T_" + dayjs().unix(),
            value: price,
            items: [
              {
                id: activity === ACTIVITY_RAPPELLING ? "KL" : "SK",
                name:
                  activity === ACTIVITY_RAPPELLING
                    ? "K??ysilaskeutuminen"
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
          "HUPS! Virhe varauspyynt???? l??hett??ess??, ole hyv?? ja laita varaustietosi s??hk??postitse toni@huvimestari.fi tai soita 0400 627 010. Ilmoitathan samalla virheest??, ett?? voimme korjata sen ensitilassa!"
        );
      }
    } catch (e) {
      setError(
        "HUPS! Virhe varauspyynt???? l??hett??ess??, ole hyv?? ja laita varaustietosi s??hk??postitse toni@huvimestari.fi tai soita 0400 627 010. Ilmoitathan samalla virheest??, ett?? voimme korjata sen ensitilassa!"
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
              El??mys:{" "}
              {activity === ACTIVITY_RAPPELLING &&
                "K??ysilaskeutuminen, m??kihyppytorni"}
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
              Osallistujam????r?? <span className="text-orange">*</span>{" "}
              <span className="mt-1 text-xs font-normal text-gray-500">
                (Mahdollisimman tarkka arvio el??mykseen osallistuvista)
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
              S??hk??postiosoite <span className="text-orange">*</span>
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
              Jos osallistujam????r?? ei ole tarkkaan tiedossa, merkkaa arvioitu
              maksimim????r?? ja kirjoita t??h??n kuinka moni todenn??k??isesti
              osallistuu. Voit my??s halutessasi kirjoittaa muita terveisi??
              ohjaajalle etuk??teen.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 grid gap-y-4 gap-x-4 grid-cols-6">
        <div className="col-span-4 text-gray-700 flex items-center">
          <div>
            <div className="font-bold">
              Hinta yhteens??: {getPrice(attendees)} ???
            </div>
            <div className="text-xs text-gray-500">
              Maksu paikan p????ll?? (kortti / MobilePay)
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
              ? "VARAUS EP??ONNISTUI"
              : loading
              ? "L??HETET????N "
              : "TEE VARAUS"}{" "}
            <PulseLoader loading={loading} color="white" size="5" />
          </button>
        </div>
        {error ? (
          <div className="col-span-6 text-sm text-orange">{error}</div>
        ) : (
          <div className="col-span-6 text-sm text-gray-500">
            Saat vahvistusviestin s??hk??postiisi vuorokauden sis??ll??.
          </div>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
