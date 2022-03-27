import { ClockIcon, ExclamationIcon, SunIcon, UserGroupIcon } from '@heroicons/react/outline'
import ActivityPage from '../components/ActivityPage'

const product = {
  name: 'Köysilaskeutuminen',
  price: 'Tilausryhmät alkaen 150 €',
  heroImage: "https://huvimestari.fi/img/koysilaskeutuminen.jpg",
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/koysilaskeutuminen_screenshot_1.jpg',
      alt: '',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/koysilaskeutuminen_screenshot_2.jpg',
      alt: '',
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://huvimestari.fi/img/koysilaskeutuminen_screenshot_3.jpg',
      alt: '',
    },
  ],
  description: `
    <p>Köysilaskeutuminen Matti Nykäsen mäkihyppytornista on asiakkaidemme kestosuosikki – eikä suotta. Laajavuoren laelle rakennettu 58 metriä korkea torni tarjoaa ympäri Jyväskylän uskomattomat näkymät, joista pääsevät nauttimaan kaikki tilausryhmän jäsenet. Ohjaaja opastaa suoritukseen ja huolehtii turvallisuudestanne. Jokainen laskeutuja määrää itse vauhtinsa.</p>
  `,
  details: [],
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
      description: 'Painoraja noin 120 kg. Raskaana olevat tapauskohtaisesti.',
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
  title: "Köysilaskeutuminen | Huvimestari",
  description: "Voita pelkosi ja laskeudu köyden varaan! Jättimäisessä köysilaskeutumisessa näet samalla Jyväskylän parhaat maisemat. Sopii polttareihin ja yrityksille."
}

export default () => <ActivityPage product={product} {...seo} />
