import {
  CalendarIcon,
  CurrencyEuroIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

const seo = {
  title: "Tapahtumakalenteri | Huvimestari",
  description:
    "Järjestämme sesonkiaikoihin tapahtumia, joihin pääset edullisesti ilman ryhmää.",
};

interface Event {
  date: string;
  time: string;
  price: string;
  event: string;
  description: string;
  icon: string;
  location: string;
}

const events: Event[] = [
  // {
  //   date: "sunnuntai 3.7.2022",
  //   time: "13.30 - 16.00",
  //   price: "40 € / laskeutuja (GoPro-video 5 € lisämaksusta)",
  //   event: "Köysilaskeutuminen mäkihyppytornista",
  //   description:
  //     "Koe ikimuistoinen 55 metriä korkea köysilaskeutuminen legendaarisesta Matti Nykäsen hyppyrimäestä. Tapahtuma täytetään varausjärjestyksessä. Ilmoittaudu viestillä 0400 627 010 tai toni@huvimestari.fi - saat paluuviestissä maksulinkin, jolla voit maksaa osallistumisesi etukäteen.",
  //   icon: "https://huvimestari.fi/img/koysilaskeutuminen_small.jpg",
  //   location: "Laajavuori, Jyväskylä",
  // },
  // {
  //   date: "torstai 7.7.2022",
  //   time: "18.00 - 21.00",
  //   price: "40 € / keinuja (GoPro-video 5 € lisämaksusta)",
  //   event: "Siltakeinu Kuokkalan sillalla",
  //   description:
  //     "Tule hyppäämään hurjan siltakeinun kyytiin Jyväskylän suurimmalta sillalta! Ikäraja 16 vuotta. Tapahtuma täytetään varausjärjestyksessä. Ilmoittaudu viestillä 0400 627 010 tai toni@huvimestari.fi - saat paluuviestissä maksulinkin, jolla voit maksaa osallistumisesi etukäteen.",
  //   icon: "https://huvimestari.fi/img/siltakeinu_small.jpg",
  //   location: "Kuokkalan silta, Jyväskylä",
  // },
  // {
  //   date: "sunnuntai 17.7.2022",
  //   time: "15.00 - 18.00",
  //   price: "40 € / kiipeilijä",
  //   event: "Kalliokiipeilykokeilu",
  //   description:
  //     "Tule kokeilemaan kalliokiipeilyä kokeneen ohjaajan opastamana. Sopii niin ensikertalaisille kuin aiemmin kiivenneille. Tapahtuma täytetään varausjärjestyksessä. Ilmoittaudu viestillä 0400 627 010 tai toni@huvimestari.fi - saat paluuviestissä maksulinkin, jolla voit maksaa osallistumisesi etukäteen.",
  //   icon: "https://huvimestari.fi/img/kalliokiipeily_small.jpg",
  //   location: "Patamankallio, Hirvaskangas",
  // },
];

const CalendarPage = () => (
  <Layout {...seo}>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Tulevat tapahtumat
        </h1>
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {!events.length && (
            <div className="m-4">Ei kalenteroituja tapahtumia.</div>
          )}
          {events.map((event) => (
            <li
              key={event.date}
              className="relative flex space-x-6 py-6 xl:static"
            >
              <img
                src={event.icon}
                alt=""
                className="h-14 w-14 flex-none rounded-full"
              />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                  {event.event}
                </h3>
                <dl className="mt-1 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Ajankohta</span>
                      <CalendarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <time>
                        {event.date} klo {event.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-0 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Tapahtumapaikka</span>
                      <LocationMarkerIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>{event.location}</dd>
                  </div>
                  <div className="mt-0 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Tapahtumapaikka</span>
                      <CurrencyEuroIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>{event.price}</dd>
                  </div>
                </dl>
                <div className="mt-2 pr-10 text-gray-900 xl:pr-0">
                  {event.description}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <br />
        <hr />
        <Testimonials />
      </div>
    </div>
  </Layout>
);

export default CalendarPage;
