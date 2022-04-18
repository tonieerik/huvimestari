import {
  ClockIcon,
  ExclamationIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import ActivityPage from "../components/ActivityPage";

const product = {
  name: "Kalliokiipeily",
  price: "Tilausryhmät alkaen 200 €",
  heroImage: "https://huvimestari.fi/img/kalliokiipeily.jpg",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://huvimestari.fi/img/kalliokiipeily_screenshot_1.jpg",
      alt: "",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://huvimestari.fi/img/kalliokiipeily_screenshot_2.jpg",
      alt: "",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://huvimestari.fi/img/kalliokiipeily_screenshot_3.jpg",
      alt: "",
    },
  ],
  description: `
    <p>Kiipeily aidoilla luonnonkallioilla on ulkoliikuntaa parhaimmillaan! Jos olet testannut joskus sisätiloissa köysikiipeilyä tai boulderointia, suosittelemme ihmeessä kokeilemaan lajin uusia ulottuvuuksia myös luonnon helmassa.</p>
    <p>Kalliokiipeilykokeiluun et kuitenkaan tarvitse aiempaa kiipeilykokemusta, voimaa tai notkeutta, vaan laji sopii käytännössä kenelle tahansa vasta-alkajista lähtien. Meiltä saat myös kaikki tarvittavat varusteet: kypärän, valjaat ja kiipeilykengät.</p>
    <p>Suunnittelemme kiipeilykokeilun aina ryhmäkohtaisesti sopivan helpoksi tai haastavaksi osallistujien taustojen mukaan. Jos kiipeilykärpänen puraisee myöhemmin, Jyvässeudulta löytyy runsaasti harrastusmahdollisuuksia lajin parissa.</p>
  `,
  details: [
    {
      name: "Lisätiedot",
      items: [
        "Voimme myös järjestää kysynnän mukaan köysitekniikkakursseja geokätköilijöille ja muille seikkailullisemmille luonnossa liikkujille. Kerää oma porukka tai seuraa tapahtumakalenteriamme ja Facebookia.",
      ],
    },
  ],
  features: [
    {
      name: "Ryhmäkoko",
      description: "Suositus 4 – 10 hlö.",
      icon: UserGroupIcon,
    },
    {
      name: "Vuodenaika / säävaraus",
      description: "Keväästä syksyyn. Sade estää aktiviteetin.",
      icon: SunIcon,
    },
    {
      name: "Rajoitukset",
      description:
        "Sopii kelle tahansa liikkujalle. Raskaana olevat tapauskohtaisesti.",
      icon: ExclamationIcon,
    },
    {
      name: "Aktiviteetin kesto",
      description: "2+ tuntia",
      icon: ClockIcon,
    },
  ],
};

const seo = {
  title: "Kalliokiipeily | Huvimestari",
  description:
    "Tule tutustumaan Suomen kesäiseen luontoon elämyksellisellä tavalla. Kalliokiipeilyssä pääset kokeilemaan miltä tuntuu kiivetä pystysuoraa kallioseinämää.",
};

export default () => <ActivityPage product={product} {...seo} />;
