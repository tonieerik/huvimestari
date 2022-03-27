import { ClockIcon, ExclamationIcon, SunIcon, UserGroupIcon } from '@heroicons/react/outline'
import ActivityPage from '../components/ActivityPage'

const product = {
  name: 'Siltakeinu',
  price: 'Tilausryhmät alkaen 100 €',
  heroImage: "https://huvimestari.fi/img/siltakeinu.jpg",
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/siltakeinu_screenshot_1.jpg',
      alt: '',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/siltakeinu_screenshot_2.jpg',
      alt: '',
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/siltakeinu_screenshot_3.jpg',
      alt: '',
    },
  ],
  description: `
    <p>Kinakujan siltakeinu on kirkkaasti toiseksi suosituin elämyksemme. Siltakeinu on jättimäinen sillan rakenteisiin viritetty keinu, jonka kyytiin hypätään valjaisiin kiinnitettynä sillan kaiteelta. Pienehkö silta yllättää positiivisesti antaen kunnon adrenaliinipiikin! Parhaiten siltakeinun idean ymmärrät videosta.</p>
    <p>Kinakujan silta on sijainniltaan erinomainen: muutaman sadan metrin päässä keskustan ytimestä, mutta myös autoille löytyy tarvittaessa helposti vierestä parkki. Esimerkiksi benjihyppyyn verrattuna siltakeinun hurja kyyti on hyvin pehmeä, mitä monet asiakkaat ovat kiitelleet.</p>
  `,
  details: [
    {
      name: 'Lisätiedot',
      items: [
        'Teemme erityistapauksissa siltakeinuttelua myös Kuokkalan sillalla. Se on kuitenkin kaluston ja miehityksen osalta niin vaativa, että emme voi tarjota sitä säännöllisesti tilausryhmille. Pyrimme silti järjestämään kerran kesässä avoimen tapahtuman halukkaille. Kannattaa siis seurata tapahtumakalenteriamme ja Facebookia. Jos budjettinne sallii, pyrimme toki tilauksestakin järjestämään Kuokkalan siltakeinun. Kysy lisää!',
      ],
    },
  ],
  features: [
    {
      name: 'Ryhmäkoko',
      description: 'Suositus 1 – 12 hlö.',
      icon: UserGroupIcon,
    },
    {
      name: 'Vuodenaika / säävaraus',
      description: 'Ympäri vuoden. Vain ukkonen tai myrsky voi estää aktiviteetin.',
      icon: SunIcon,
    },
    {
      name: 'Rajoitukset',
      description: 'Painoraja noin 120 kg. Ei alle 16-vuotiaille. Ei raskaana oleville.',
      icon: ExclamationIcon,
    },
    {
      name: 'Aktiviteetin kesto',
      description: '30+ minuuttia. Alkuinfo 15 min + noin 15 min / hlö.',
      icon: ClockIcon,
    },
  ]
}

const seo = {
  title: "Siltakeinu | Huvimestari",
  description: "Hyppää sillalta! Adrenaliinipiikiltä et voi välttyä tässä jättimäisessä siltakeinussa. Sopii polttareihin ja yrityksille."
}

export default () => <ActivityPage product={product} {...seo} />
