import {
  ClockIcon,
  ExclamationIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import ActivityPage from "../components/ActivityPage";

const product = {
  name: "Jääkiipeily",
  price: "Tilausryhmät alkaen 275 €",
  heroImage: "https://huvimestari.fi/img/jaakiipeily.jpg",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://huvimestari.fi/img/jaakiipeily_screenshot_1.jpg",
      alt: "",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://huvimestari.fi/img/jaakiipeily_screenshot_2.jpg",
      alt: "",
    },
  ],
  description: `
    <p>Jääkiipeilykokeilu luonnon jääputouksilla on elämys vailla vertaa. Hitonhaudan komeissa maisemissa pääset kokeilemaan vuorikiipeilijöidenkin käyttämiä jäähakkuja ja -rautoja. Jokainen löytää itselleen varmasti sopivasti haastetta!</p>
    <p>Aktiviteetti ei vaadi ennakkotaitoja, ja peruskuntoinen liikkuja pärjää erinomaisesti. Helpoimmat reitit ovat kumpuilevaa positiivista seinää ja vaikeimmat pystysuoraa jääseinämää. Meiltä saat myös kaikki jääkiipeilykokeiluun tarvittavat varusteet.</p>
    <p>Jääkiipeilykausi on Keski-Suomessa melko lyhyt ja vaihtelee vuosittain, mutta helmi–maaliskuussa jäät ovat tyypillisesti parhaimmillaan.</p>
  `,
  details: [
    {
      name: "Lisätiedot",
      items: [
        "Järjestämme myös jääkiipeilykursseja. Kerää oma porukka tai seuraa tapahtumakalenteriamme ja Facebookia.",
      ],
    },
  ],
  features: [
    {
      name: "Ryhmäkoko",
      description: "Suositus 4 – 12 hlö.",
      icon: UserGroupIcon,
    },
    {
      name: "Vuodenaika / säävaraus",
      description: "Yleensä tammi-maaliskuussa vuodesta riippuen.",
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
  title: "Jääkiipeily | Huvimestari",
  description:
    "Tule tutustumaan Suomen talviseen luontoon elämyksellisellä tavalla. Jääkiipeilyssä pääset kokeilemaan miltä tuntuu kiivetä pystysuoraa jääputousta.",
};

export default () => <ActivityPage product={product} {...seo} />;
