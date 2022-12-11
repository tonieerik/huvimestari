import {
  ClockIcon,
  ExclamationIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import ActivityPage from "../components/ActivityPage";

const product = {
  name: "Siltakeinu (tauolla)",
  price: "Tilausryhmät alkaen 100 €",
  ctaText: "Toistaiseksi ei saatavilla",
  ctaLink: undefined,
  heroImage: "https://huvimestari.fi/img/siltakeinu.jpg",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://huvimestari.fi/img/siltakeinu_screenshot_1.jpg",
      alt: "",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://huvimestari.fi/img/siltakeinu_screenshot_2.jpg",
      alt: "",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://huvimestari.fi/img/siltakeinu_screenshot_3.jpg",
      alt: "",
    },
  ],
  description: `
    <p>Siltakeinu on jättimäinen sillan rakenteisiin viritetty keinu, jonka kyytiin hypätään valjaisiin puettuna sillan laidalta. Kinakujan siltakeinu on kirkkaasti toiseksi suosituin elämyksemme. Pieneltä näyttävä silta yllättää positiivisesti ja antaa kunnon adrenaliinipiikin! </p>
    <p>Esimerkiksi benjihyppyyn verrattuna siltakeinun vauhdikas kyyti on verrattain pehmeä, mitä monet asiakkaamme ovat kiitelleet. Hetkellinen vapaapudotus ottaa kuitenkin taatusti mahanpohjasta ja saa hetkellisen hirvityksen tunteen laukeamaan nauruna.</p>
    <p>Kinakujan silta sijaitsee muutaman sadan metrin päässä Jyväskylän keskustan ytimestä.</p>
  `,
  details: [
    {
      name: "Lisätiedot",
      items: [
        "Teemme erityistapauksissa siltakeinuttelua myös Kuokkalan sillalla. Se on kuitenkin kaluston ja miehityksen osalta niin vaativa, että emme voi tarjota sitä säännöllisesti tilausryhmille. Pyrimme silti järjestämään kerran kesässä avoimen tapahtuman halukkaille. Kannattaa siis seurata tapahtumakalenteriamme ja Facebookia. Jos budjettinne sallii, pyrimme toki tilauksestakin järjestämään Kuokkalan siltakeinun. Kysy lisää!",
      ],
    },
  ],
  features: [
    {
      name: "Ryhmäkoko",
      description: "Suositus 1 – 12 hlö.",
      icon: UserGroupIcon,
    },
    {
      name: "Vuodenaika / säävaraus",
      description:
        "Ympäri vuoden. Vain ukkonen tai myrsky voi estää aktiviteetin.",
      icon: SunIcon,
    },
    {
      name: "Rajoitukset",
      description:
        "Painoraja noin 120 kg. Ei alle 16-vuotiaille. Ei raskaana oleville.",
      icon: ExclamationIcon,
    },
    {
      name: "Aktiviteetin kesto",
      description: "30+ minuuttia. Alkuinfo 15 min + noin 15 min / hlö.",
      icon: ClockIcon,
    },
  ],
};

const seo = {
  title: "Siltakeinu | Huvimestari",
  description:
    "Hyppää sillalta! Adrenaliinipiikiltä et voi välttyä tässä jättimäisessä siltakeinussa. Sopii polttareihin ja yrityksille.",
};

export default () => <ActivityPage product={product} {...seo} />;
