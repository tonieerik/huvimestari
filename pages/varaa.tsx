import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import dayjs from "dayjs";
import "dayjs/locale/fi";
import { Fragment, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BookingForm from "../components/BookingForm";
import Layout from "../components/Layout";
import { ACTIVITY_RAPPELLING, ACTIVITY_PENDULUM } from "../const";

dayjs.locale("fi");

interface Date {
  date: string;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}

interface Slots {
  [key: string]: number[];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const seo = {
  title: "Varauskalenteri | Huvimestari",
  description:
    "Varaa näppärästi aika ryhmällenne varauskalenteristanne mihin aikaan vuorokaudesta tahansa.",
};

export default function Varaa() {
  const [activity, setActivity] = useState<number>(0);
  const [date, setDate] = useState("");
  const [days, setDays] = useState<Date[]>([]);
  const [error, setError] = useState("");
  const [freeSlots, setFreeSlots] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [maxAttendees, setMaxAttendees] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(dayjs().date(1));
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const days = [];

    let d =
      selectedMonth.day(1).date() > 20 || selectedMonth.day(1).date() === 1
        ? selectedMonth.day(1)
        : selectedMonth.day(1).subtract(1, "week");

    while (d.isBefore(selectedMonth.endOf("month")) || d.day() !== 1) {
      days.push({
        date: d.format("YYYY-MM-DD"),
        isCurrentMonth:
          d.month() === selectedMonth.month() &&
          d.isAfter(dayjs().add(1, "day")),
        isSelected: d.format("YYYY-MM-DD") === date,
        isToday: d.isSame(dayjs(), "day"),
      });
      d = d.add(1, "day");
    }

    setDays(days);
  }, [date, selectedMonth]);

  useEffect(() => {
    if (date !== "" && activity !== 0) {
      getFreeSlots();
      setSelectedMonth(dayjs(date).date(1));
    }
  }, [activity, date]);

  useEffect(() => {
    if (!time) {
      setMaxAttendees(0);
      return;
    }

    const [hour, min] = time.split(".");

    if (!hour || !min) {
      console.error("Time split failed (hour: " + hour + ", min: " + min + ")");
    }

    let max = 1;

    for (
      let x = dayjs()
        .hour(parseInt(hour))
        .minute(parseInt(min))
        .add(15, "minutes");
      freeSlots?.includes(x.format("HH.mm"));
      x = x.add(15, "minutes")
    ) {
      max++;
    }

    setMaxAttendees(max);
  }, [time]);

  useEffect(() => {
    if (submitted) {
      setActivity(0);
      setDate("");
      setTime("");
    }
  }, [submitted]);

  const getFreeSlots = async () => {
    if (date === "" || activity === 0) {
      setFreeSlots(undefined);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://gcalendar-booking.herokuapp.com/free-slots/" + date
      );
      const slots: Slots = JSON.parse(await res.json());

      setFreeSlots(
        Object.entries(slots)
          .filter((x) => x[1].includes(activity))
          .map((x) => x[0])
      );
    } catch (e) {
      setError("Virhe haettaessa kalenteritapahtumia.");
    } finally {
      setLoading(false);
    }
  };

  const selectActivity = (activity: number) => {
    setActivity(activity);
    setTime("");
  };

  const selectDate = (date: string) => {
    if (dayjs(date).isAfter(dayjs().add(1, "day"))) {
      setDate(date);
      setTime("");
    }
  };

  const prevMonth = () => {
    if (!selectedMonth.isSame(dayjs(), "month"))
      setSelectedMonth(selectedMonth.subtract(1, "month"));
  };

  const nextMonth = () => {
    setSelectedMonth(selectedMonth.add(1, "month"));
  };

  const renderSlots = () => {
    let t = dayjs().set("hour", 8).set("minute", 0);
    const end = dayjs().set("hour", 21).set("minute", 0);
    const hours = [];

    while (t.isBefore(end)) {
      hours.push(t.format("HH.mm"));
      t = t.add(15, "minute");
    }

    return (
      <div className="grid grid-cols-4 gap-y-6 gap-x-4 max-w-xs md:max-w-sm">
        {hours.map((x) => (
          <Fragment key={x}>
            <button
              type="button"
              className={
                "inline-flex items-center m-3 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm bg-white " +
                (freeSlots?.includes(x) ? "text-orange" : "text-gray-300")
              }
              onClick={() => setTime(x)}
              disabled={!freeSlots?.includes(x)}
            >
              {x}
            </button>
          </Fragment>
        ))}
      </div>
    );
  };

  const renderCalendar = () => (
    <div>
      <div className="max-w-7xl mx-auto px-8 pt-10 sm:px-6">
        Vuonna 2023 aloitamme köysilaskeuduttamiset vasta 19. toukokuuta.
        Poikkeuksena yli 10 hengen ryhmät (kysy lisää sähköpostitse).
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
        <div className="md:pr-14">
          <div className="flex items-center">
            <h2 className="flex-auto font-semibold text-gray-900">
              {selectedMonth.format("MMMM YYYY").toUpperCase()}
            </h2>
            <button
              type="button"
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={prevMonth}
            >
              <span className="sr-only">Edellinen kuukausi</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={nextMonth}
            >
              <span className="sr-only">Seuraava kuukausi</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>Ma</div>
            <div>Ti</div>
            <div>Ke</div>
            <div>To</div>
            <div>Pe</div>
            <div>La</div>
            <div>Su</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.date}
                className={classNames(
                  dayIdx > 6 && "border-t border-gray-200",
                  "py-2"
                )}
              >
                <button
                  type="button"
                  className={classNames(
                    day.isSelected && "text-white",
                    !day.isSelected &&
                      day.isToday &&
                      "text-gray-500 bg-gray-100",
                    !day.isSelected &&
                      !day.isToday &&
                      day.isCurrentMonth &&
                      "text-gray-900",
                    !day.isSelected &&
                      !day.isToday &&
                      !day.isCurrentMonth &&
                      "text-gray-400",
                    day.isSelected && day.isToday && "bg-orange",
                    day.isSelected && !day.isToday && "bg-orange",
                    !day.isSelected && "hover:bg-gray-200",
                    (day.isSelected || day.isToday) && "font-bold",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                  )}
                  onClick={() => {
                    selectDate(day.date);
                  }}
                >
                  <time dateTime={day.date}>
                    {day.date.split("-")?.pop()?.replace(/^0/, "")}
                  </time>
                </button>
              </div>
            ))}
          </div>
          {date === "" && (
            <div className="flex flex-col items-center">
              <h3 className="mt-4 text-lg text-center text-orange">
                Valitse ensin päivämäärä
              </h3>
              <span className="text-gray-400 text-xs sm:text-base">
                Aikoja tälle päivälle ja huomiselle voit tiedustella vain
                puhelimitse.
              </span>
            </div>
          )}
          {date !== "" && (
            <div className="text-center">
              {activity === 0 && (
                <h3 className="mt-4 text-lg text-center text-orange">
                  Valitse elämys
                </h3>
              )}
              <button
                type="button"
                className={
                  "inline-flex items-center m-2 sm:m-6 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" +
                  (activity === ACTIVITY_RAPPELLING && " text-orange")
                }
                onClick={() => selectActivity(ACTIVITY_RAPPELLING)}
              >
                Köysilaskeutuminen
              </button>
              <button
                type="button"
                className={
                  "inline-flex items-center m-2 sm:m-6 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" +
                  (activity === ACTIVITY_PENDULUM && " text-orange")
                }
                onClick={() => selectActivity(ACTIVITY_PENDULUM)}
              >
                Siltakeinu
              </button>
            </div>
          )}
        </div>
        <section className="mt-12 md:mt-0 md:pl-14">
          {time === "" ? (
            <>
              {date !== "" && activity !== 0 ? (
                loading ? (
                  <ClipLoader color="#E96D00" loading={loading} size={100} />
                ) : (
                  <>
                    <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Vapaat ajat
                      {activity === ACTIVITY_RAPPELLING
                        ? " köysilaskeutumiseen mäkihyppytornista:"
                        : " siltakeinuun Kinakujan sillalta:"}
                    </h2>
                    {activity === ACTIVITY_RAPPELLING ? (
                      renderSlots()
                    ) : (
                      <div className="mt-2 text-sm">
                        Pahoittelut! Siltakeinu ei ole toistaiseksi saatavilla
                        kaudella 2023
                      </div>
                    )}
                  </>
                )
              ) : null}
            </>
          ) : (
            <>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => setTime("")}
                >
                  <ChevronDoubleLeftIcon
                    className="h-3 w-3 mr-1"
                    aria-hidden="true"
                  />
                  Takaisin ajanvalintaan
                </button>
              </div>
              <BookingForm
                activity={activity}
                date={date}
                maxAttendees={maxAttendees}
                setSubmitted={setSubmitted}
                time={time}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );

  const renderThanks = () => (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl text-orange">Kiitos varauksesta!</h1>
      <div className="mt-12">
        Tarkistettuamme varauspyyntösi saat vielä varausvahvistuksen
        sähköpostiisi. Kurkkaa myös roskapostikansio (etenkin Hotmail imaisee
        hanakasti viestejä sinne). Sähköpostissa on liitteenä tietopaketti
        varausta koskien. Kannattaa lukaista se huolella läpi etukäteen. Näin
        osaatte saapua paikalle ajoissa eikä tule yllätyksiä paikan päällä.
      </div>
      <div className="mt-4 mb-12">
        Jos varaukseesi sattui lipsahtamaan virhe, tai sitä tarvitsee myöhemmin
        muokata, hoituu se näppärimmin lähettämällä sähköpostia meille. Voit
        vastata saamaasi varausvahvistukseen niin tiedämme suoraan mitä varausta
        viesti koskee.
      </div>
      <button
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange"
        onClick={() => setSubmitted(false)}
      >
        TEE TOINEN VARAUS?
      </button>
    </div>
  );

  return (
    <Layout {...seo}>{submitted ? renderThanks() : renderCalendar()}</Layout>
  );
}
