import { CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import imageParty from '../images/synttarit-siltakeinu.jpg'
import imageRappelling from '../images/koysilaskeutuminen_action.jpg'
import imagePendulum from '../images/siltakeinu_action.jpg'
import imageRockClimbing from '../images/kalliokiipeily_action.jpg'

const features = [
  'Uniikkia kokemusta synttärisankari muistelee varmasti vielä vuosikymmenten päästä kiikkustuolissa keinuen.',
  'Halutessaan koko synttäriseurue pääsee testaamaan kanttiaan köysielämysten parissa. Yhteisiä kokemuksia on mukava fiilistellä jälkikäteen.',
  'Jokainen synttäriseurueen jäsen saa muistoksi GoPro -videon, jonka voi jakaa halutessaan vaikka somessa.',
  'Köysiaktiviteetteja toteutamme eri puolilla Jyväskylää ja Keski-Suomea. Niinpä voit valita ryhmällesi otollisimman sijainnin.',
  'Järjestämme kaikki aktiviteettimme pienryhmissä, väljästi ulkoilmassa ja maskisuositusta noudattaen, joten elämys on turvallinen vaihtoehto näinä aikoina.',
]

const services = [
  {
    title: 'Köysilaskeutuminen',
    price: '150 €',
    description:
      'Köysilaskeutuminen legendaarisesta Matti Nykäsen mäkihyppytornista on synttäriasiakkaidemme kestosuosikki – eikä suotta. Laajavuoren nyppylällä seisova 58 metriä korkea torni tarjoaa ympäri Jyväskylän uskomattomat näkymät, joista pääsevät nauttimaan kaikki synttäriseurueen jäsenet. Jokainen osallistuja määrää itse vauhtinsa, joten Jyväskylän komeista maisemista voi nautiskella oman mielensä mukaan.',
    imageSrc: imageRappelling,
    imageAlt: 'Köysilaskeutuminen mäkihyppytornista',
    actionButtonText: 'VARAA AIKA SYNTTÄRIRYHMÄLLE!',
    actionButtonUrl: '/varaa',
    videoButtonText: 'KATSO VIDEO',
    videoButtonUrl: 'https://www.youtube.com/watch?v=84_E_5c9kmc'
  },
  {
    title: 'Siltakeinu',
    price: '100 €',
    description:
      'Vauhdikas siltakeinu Kinakujan sillalta on kirkkaasti toiseksi suosituin synttärielämyksemme. Siltakeinu on jättimäinen sillan rakenteisiin viritetty keinu, jonka kyytiin hypätään valjaisiin kiinnitettynä sillan laidalta. Siltakeinu saa taatusti adrenaliinin virtaamaan synttärisankarin suonissa. Sillan sijainti on synttäreitä ajatellen erinomainen: muutaman sadan metrin päässä Jyväskylän keskustasta.',
    imageSrc: imagePendulum,
    imageAlt: 'Siltakeinu Kinakujan sillalla',
    actionButtonText: 'VARAA AIKA SYNTTÄRIRYHMÄLLE!',
    actionButtonUrl: '/varaa',
    videoButtonText: 'KATSO VIDEO',
    videoButtonUrl: 'https://www.youtube.com/watch?v=f1pd5wLpDLU'
  },
  {
    title: 'Kalliokiipeily',
    price: '200 €',
    description:
      'Kiipeily luonnon kallioilla on reipas valinta synttäreille – luontoliikuntaa parhaimmillaan! Synttäriseurueen kiipeilykokeilu suunnitellaan aina ryhmäkohtaisesti, jotta jokainen pääsee haastamaan sopivasti itseään. Et tarvitse kuitenkaan aiempaa kiipeilykokemusta, voimaa tai notkeutta vaan kiipeily sopii käytännössä kenelle tahansa. Tässä synttäriaktiviteetissa yhteishenki hioutuu, kun kaikki tsemppaavat toisiaan.',
    imageSrc: imageRockClimbing,
    imageAlt: 'Kalliokiipeilijä',
    actionButtonText: 'KYSY LISÄÄ',
    actionButtonUrl: '/yhteystiedot',
    videoButtonText: 'KATSO VIDEO',
    videoButtonUrl: 'https://www.youtube.com/watch?v=rE-vQsVkKaw'
  },
]

const seo = {
  title: "Synttärit Jyväskylä | Huvimestari",
  description: "Täyttääkö ystäväsi tai sukulaisesi pyöreitä vuosia? Haluaisitko yllättää läheisesi lahjalla, jota muistellaan taatusti vielä vuosienkin päästä?"
}

export default function BirthdayParty() {
  return (
    <Layout {...seo}>
      <div className="bg-white sm:py-8">

        <div className="relative">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src={imageRappelling}
                  layout="fill"
                  alt="Ikimuistoiset synttärit"
                />
                <div className="absolute inset-0 bg-orange mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="block text-gray-100 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Synttärijuhlat tai muuten vaan kekkerit tiedossa?
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-100 sm:max-w-3xl">
                  Täyttääkö ystäväsi tai sukulaisesi pyöreitä vuosia? Haluaisitko yllättää läheisesi tällä kertaa aineettomalla lahjalla, jota muistellaan taatusti vielä vuosienkin päästä?
                </p>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-100 sm:max-w-3xl">
                  Huvimestarin siltakeinu, köysilaskeutuminen ja kalliokiipeilykokeilu ovat osuvia lahjoja, kun haluat antaa lahjaksi jotakin ainutlaatuista. Kaikki elämyksemme sopivat käytännössä junnusta muoriin.
                </p>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-100 sm:max-w-3xl">
                  Huvimestarin kesän kalenteri täyttyy nopeasti, joten varaathan elämyslahjan pian!
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="/yhteystiedot"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange bg-white sm:px-8"
                    >
                      KYSY LISÄÄ
                    </a>
                    <a
                      href="/varaa"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange sm:px-8"
                    >
                      VARAA SYNTTÄRIAKTIVITEETTI!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-8 sm:py-16">
          {services.map(service =>
            <div className="mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:py-2 lg:px-8" key={service.title}>
              <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                <div className="lg:row-end-1 lg:col-span-4">
                  <div className="aspect-w-9 aspect-h-5 rounded-lg bg-gray-100 overflow-hidden relative">
                    <Image src={service.imageSrc} alt={service.imageAlt} layout="fill" className="object-center object-cover" />
                  </div>
                </div>
                <div className="max-w-2xl mx-auto mt-4 lg:mt-2 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                  <div className="flex flex-col-reverse">
                    <div className="mt-2">
                      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{service.title}</h1>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4 text-base md:text-lg lg:text-base">{service.description} Tilausryhmien hinnat alkaen {service.price}.</p>
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    <a href={service.actionButtonUrl}>
                    <button
                      type="button"
                      className="w-full bg-orange border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white"
                    >
                      {service.actionButtonText}
                    </button>
                    </a>
                    <a target="_blank" href={service.videoButtonUrl}>
                    <button
                      type="button"
                      className="w-full h-full bg-white border border-orange rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-orange"
                    >
                      {service.videoButtonText}
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:py-8 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-x-8">
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">Miksi valita köysielämys synttäriaktiviteetiksi Jyväskylässä?</h1>
              <div className="mt-4 sm:mt-8 md:mt-10 md:gap-x-8 xl:mt-0 xl:col-span-2">
                <ul role="list" className="divide-y divide-gray-200">
                  {features.slice(0, 5).map((feature, featureIdx) =>
                    featureIdx === 0 ? (
                      <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                        <CheckIcon className="flex-shrink-0 h-6 w-6 text-orange" aria-hidden="true" />
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    ) : (
                      <li key={feature} className="py-4 flex">
                        <CheckIcon className="flex-shrink-0 h-6 w-6 text-orange" aria-hidden="true" />
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-16 bg-white">
          <div className="max-w-7xl mx-auto lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
                <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      src={imageParty}
                      alt="Hauskat synttärit Jyväskylässä"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-yellow lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                  <svg
                    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-orange" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={180} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-orange" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2 className="text-3xl font-extrabold text-gray-800" id="join-heading">
                    Joko varasit?
                  </h2>
                  <p className="text-lg text-gray-800">
                  Jyväskylän parhaat synttärit ovat vain klikkauksen päässä. Kysy lisää vauhdikkaista synttärielämyksistämme tai varaa seurueellesi sopiva aktiviteetti saman tien varauskalenteristamme. Erityisesti kesäviikonloput viedään nopeasti käsistä, joten kipin kapin varailemaan.
                  </p>
                  <a
                    className="block w-full py-3 px-5 text-center bg-orange border border-transparent rounded-md shadow-md text-base font-medium text-gray-100 hover:bg-gray-50 sm:inline-block sm:w-auto"
                    href="#"
                  >
                    Varaa aika synttäriryhmällesi!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />

      </div>
    </Layout>
  )
}
