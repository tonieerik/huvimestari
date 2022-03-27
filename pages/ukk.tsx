/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import Header from '../components/Header'

const faqs = [
  {
    question: "Vaikuttaako koronavirus toimintaanne?",
    answer:
      "Koronavirus ei käytännössä vaikuta toimintaamme. Olemme pieni toimija ja massoja ei tapahtumissamme liiku. Noudatamme maskisuositusta, suosimme pienryhmiä ja toteutamme muutenkin kaikki aktiviteetit ulkosalla. Seuraamme myös valtakunnallisia ohjeistuksia ja rajoituksia. Toivottavasti pian taas palaamme rajoitteettomaan elämään kaikin puolin.",
  },
  {
    question: "Saako aktiviteeteissa nauttia alkoholia?",
    answer:
      "Kaikki aktiviteettimme ovat päihteettömiä. Osallistujia emme puhalluta, mutta oletamme, että jokainen osaa pitää korkin kiinni ennen omaa suoritustaan. Päihtyneen oloista ihmistä emme ota asiakkaaksemme. Vaadimme tietysti asiallista ja muita häiritsemätöntä käytöstä muiltakin ryhmän jäseniltä.",
  },
  {
    question: "Onko aktiviteetteihin painorajoja tai fyysisiä vaatimuksia?",
    answer:
      "Köysilaskeutuminen ja siltakeinu eivät vaadi oikeastaan lainkaan fyysistä suorittamista. Isokokoisten kohdalla voi tulla toki este, elleivät valjaat mahdu päälle. Jos osallistujalla on liikuntarajoitteita, mietitään etukäteen, voimmeko järjestää kaiteen ylityksen. Näin on joskus aiemmin tehtykin. Haluamme palvella asiakkaitamme yksilöllisesti ja ennakkoluulottomasti. Kallio- ja jääkiipeilykokeiluissa pärjää lähes kuka vain. Tarjolla on aina vähintään yksi helppo/helpohko kiipeilylinja. Kiipeilytykset pyritään toteuttamaan aina osallistujien mukaan. Jokaiselle myös vastapainoisesti pyritään löytämään haasteita sopivassa määrin.",
  },
  {
    question: "Voivatko raskaana olevat osallistua aktiviteetteihin?",
    answer:
      "Harkinnan mukaan järjestämme elämyksiä myös raskaana oleville. Siltakeinun rajun vauhdin vuoksi emme ota siihen raskaana olevia, mutta esimerkiksi köysilaskeutuminen kokovartalovaljailla voi onnistua. Ole yhteydessä etukäteen, niin keskustellaan aiheesta tarkemmin.",
  },
  {
    question: "Onko elämyksille ikärajaa?",
    answer:
      "Siltakeinujen ikäraja on 16 vuotta. Muihin elämyksiin suosittelemme 16 vuoden ikää, mutta onnistuu toki nuoremmiltakin junnuilta hienosti, jos uskallusta riittää. Kiipeily onnistuu aivan pieniltäkin. Jääkiipeilyssä fyysinen voima voi kuitenkin tulla nuorille lapsille kynnyskysymykseksi. Alle 18-vuotiailta haluamme vanhemman suostumuksen. Jos osallistuja on alaikäinen, keskustellaan asiasta etukäteen ja toimitamme lomakkeen täytettäväksenne.",
  },
  {
    question: "Järjestättekö elämyksiä ympäri vuoden?",
    answer:
      "Kyllä, köydet ja muut turvavälineet kestävät Suomen keliolosuhteet erinomaisesti. Köysilaskeutuminen ja siltakeinu onnistuvat mihin tahansa aikaan vuodesta. Kalliokiipeily ei luonnollisestikaan onnistu talvella eikä jääkiipeily muulloin kuin talvella sopivissa jääolosuhteissa. Kevät ja syksy ovat aina välikausia esimerkiksi kalliokiipeilyn suhteen. Tarvittaessa kysy tarkemmin näistä viestillä tai puhelimitse.",
  },
  {
    question: "Miten aktiviteetteihin tulee pukeutua / varustautua?",
    answer:
      "Kaikkeen toimintaamme kuuluvat valjaat lähes poikkeuksetta, joten hameet ja pitkät takit eivät ole parhaita valintoja. Yleisesti ottaen vaatetuksen ei tarvitse olla liikunnallinen, ellei kyse ole kiipeilystä. Esimerkiksi farkut sopivat oikein hyvin köysilaskeutumiseen ja siltakeinuun. Pitkät hiukset on hyvä sitoa suorituksen ajaksi, ja mahdollinen kampaus (esim. polttareissa) on oltava sellainen, että kypärän saa päähän (ei nutturaa / ponnaria ylös). Tarvittaessa polttarisankarille voi varata vaihtovaatetta, esim. trikoot hameen alle. Talvella on hyvä olla mukana ohut tupsuton pipo, joka sopii kypärän alle. Kiipeilykokeiluissa kiivetään välillä aktiivisesti hiki päällä ja levätään välillä odottaen omaa vuoroa. Näin ollen vaatetuksen on hyvä olla sen mukainen. Housujen on hyvä olla joustavat, jotka kestävät myös hieman hankausta. Etenkin jääkiipeilyssä kannattaa kerrospukeutua ja varata taukojen ajaksi mukaan ainakin taukotakki ja lämpimät hanskat. Sormet voivat olla jäässä suorituksen jälkeen. Jääkiipeilyssä kenkiin kiinnitettävät jääraudat saattavat aiheuttaa naarmuja housuihin, joten valitse housusi sen mukaan.",
  },
  {
    question: "Voinko ostaa lahjakortin elämyksiinne?",
    answer:
      "Kyllä, laita vaan sähköpostia mihin elämykseen ja monelle haluat lahjakortin. Saat vastauksena sähköpostissa lahjakortin ja laskun. Poikkeuksen tekee yleiset tapahtumat, joihin otamme vain suoria ilmoittautumisia. Tietysti voit semmoiseenkin ystäväsi ilmoittaa.",
  },
  {
    question: "Onko osallistujia vakuutettu tapaturmien varalta?",
    answer:
      "Ei, mutta toiminnallamme on vastuuvakuutus. Kuten muussakin liikunnassa, jokaisen on hyvä huolehtia omasta vakuutusturvastaan. Koulutetut ja kokeneet ohjaajat huolehtivat kuitenkin turvallisuudestanne.",
  },
  {
    question: "Miten ohjaajanne ovat kouluttautuneet?",
    answer:
      "Kaikki köysiturvallisuudesta vastaavat henkilöt ovat Suomen kiipeilyliiton kouluttamia köysitoiminnan ohjaajia, kiipeilyohjaajia tai jääkiipeilyohjaajia. Lisäksi ohjaajamme ovat ensiaputaitoisia (EA2). Olet siis turvallisissa käsissä aktiviteeteissamme.",
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Usein kysytyt kysymykset</h2>
            <div style={{border: 'none'}}>
              <br />
              Tarjoamamme elämyspalvelut ovat monille asiakkaille jännittäviä ja jopa pelottavia kokemuksia. Osittain ehkä juuri se niissä kiehtookin. Osalla asiakkaista on ennakkoon paljonkin kysymyksiä, jotka ovat usein samoja kuin monilla muillakin. Olemme koonneet alle muutamia useimmin toistuvia kysymyksiä vastauksineen.
              <br />
              <br />
              Haluamme tarjota jokaiselle mahdollisimman turvallisen tunteen hänen tullessaan järjestämäämme aktiviteettiin. Näin ollen jos jokin vielä mietityttää, laita viestiä tai soita!
              <br /><br />
            </div>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-orange">{faq.question}</span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
