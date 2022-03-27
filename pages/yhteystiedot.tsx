import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Example() {
  return (
    <>
      <Header />
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Ota yhteyttä</h2>
                <p className="mt-3 text-lg leading-6 text-gray-700">
                  Heitä viestiä tai soita, jos joku asia jäi vielä askarruttamaan tutustuttuasi verkkosivuihimme.
                </p>
                <dl className="mt-8 text-base text-gray-700">
                  <div className="mt-6">
                    <dt className="sr-only">Puhelinnumero</dt>
                    <dd className="flex">
                      <PhoneIcon className="flex-shrink-0 h-6 w-6 text-orange" aria-hidden="true" />
                      <span className="ml-3"><a href="tel:+358400627010">0400 627 010</a></span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Sähköpostiosoite</dt>
                    <dd className="flex">
                      <MailIcon className="flex-shrink-0 h-6 w-6 text-orange" aria-hidden="true" />
                      <span className="ml-3"><a href="mailto:toni@huvimestari.fi">toni@huvimestari.fi</a></span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-500">
                  Oletko kiinnostunut elämyspalveluiden järjestämisestä? Tarvitsemme ajoittain apukäsiä ja yhteistyökumppaneita. Esittele siis itsesi meille, ja keskustellaan aiheesta.
                </p>
              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Sähköpostiosoite
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
                      placeholder="Sähköpostiosoite"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Puhelinnumero
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
                      placeholder="Puhelinnumero"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Viesti
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md"
                      placeholder="Viesti"
                      defaultValue={''}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange"
                    >
                      Lähetä viesti
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}
