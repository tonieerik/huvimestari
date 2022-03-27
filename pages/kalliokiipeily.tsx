import { ClockIcon, ExclamationIcon, SunIcon, UserGroupIcon } from '@heroicons/react/outline'
import ActivityPage from '../components/ActivityPage'

const product = {
  name: 'Kalliokiipeily',
  price: 'Tilausryhmät alkaen 200 €',
  heroImage: "https://huvimestari.fi/img/kalliokiipeily.jpg",
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/kalliokiipeily_screenshot_1.jpg',
      alt: '',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/kalliokiipeily_screenshot_2.jpg',
      alt: '',
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/kalliokiipeily_screenshot_3.jpg',
      alt: '',
    },
  ],
  description: `
    <p>Kiipeily luonnonkalliolla on luontoliikkumista parhaimmillaan! Jokaisen sisäkiipeilyä kokeilleen tulisi joskus käydä kokeilemassa lajin uusia ulottuvuuksia luonnon helmassa. Jyvässeudulta löytyy runsaasti harrastusmahdollisuuksia tämänkin lajin parissa vasta-alkajista lähtien.</p>
    <p>Tähän aktiviteettiin ei tarvitse kuitenkaan kiipeilykokemusta, voimaa tai notkeutta vaan se sopii lähes kenelle tahansa. Kiipeilykokeilut suunnitellaankin aina ryhmäkohtaisesti sopivan helpoiksi tai haastaviksi osallistujien mukaan.</p>
  `,
  details: [
    {
      name: 'Lisätiedot',
      items: [
        'Voimme myös järjestää kysynnän mukaan köysitekniikkakursseja geokätköilijöille ja muille seikkailullisemmille luonnossa liikkujille. Kerää oma porukka tai seuraa tapahtumakalenteriamme ja Facebookia.',
      ],
    },
  ],
  features: [
    {
      name: 'Ryhmäkoko',
      description: 'Suositus 4 – 10 hlö.',
      icon: UserGroupIcon,
    },
    {
      name: 'Vuodenaika / säävaraus',
      description: 'Keväästä syksyyn. Sade estää aktiviteetin.',
      icon: SunIcon,
    },
    {
      name: 'Rajoitukset',
      description: 'Sopii kelle tahansa liikkujalle. Raskaana olevat tapauskohtaisesti.',
      icon: ExclamationIcon,
    },
    {
      name: 'Aktiviteetin kesto',
      description: '2+ tuntia',
      icon: ClockIcon,
    },
  ]
}

const seo = {
  title: "Kalliokiipeily | Huvimestari",
  description: "Tule tutustumaan Suomen kesäiseen luontoon elämyksellisellä tavalla. Kalliokiipeilyssä pääset kokeilemaan miltä tuntuu kiivetä pystysuoraa kallioseinämää."
}

export default () => <ActivityPage product={product} {...seo} />
