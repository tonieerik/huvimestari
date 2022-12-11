/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";

const faqs = [
  {
    question: "Voinko ostaa lahjakortin elämyksiinne?",
    answer:
      "Kyllä, voit tilata lahjakortin suoraan verkkosivuiltamme. Tarvittaessa voit myös tiedustella asiaa sähköpostitse. Saat lahjakortin ja laskun sähköpostiisi. Voit hankkia lahjakortin joko suoraan tiettyyn aktiviteettiin tai vapaavalintaisella summalla. Yleisiin tapahtumiin otamme vain suoria ilmoittautumisia.",
  },
  {
    question: "Saako aktiviteeteissa nauttia alkoholia?",
    answer:
      "Kaikki aktiviteettimme ovat päihteettömiä. Osallistujia emme puhalluta, mutta oletamme, että jokainen osaa pitää korkin kiinni ennen omaa suoritustaan. Päihtyneen oloista ihmistä emme ota asiakkaaksi turvallisuussyistä. Vaadimme tietysti asiallista käytöstä muiltakin ryhmän jäseniltä, vaikka kyseessä olisi railakas polttaripäivä.",
  },
  {
    question: "Miten teillä voi maksaa?",
    answer:
      "Köysielämyksen voi maksaa paikan päällä korttimaksuna tai MobilePaylla. Tarvittaessa myös lasku järjestyy esimerkiksi yritysasiakkaille. Käteistä emme käsittele. Lisäksi liikuntaedut (Smartum, Edenred, Tyky-maksuvälineet, ePassi) käyvät vain kallio- ja jääkiipeilyihin.",
  },
  {
    question: "Onko aktiviteetteihin painorajoja tai fyysisiä vaatimuksia?",
    answer:
      "Köysilaskeutuminen ja siltakeinu eivät vaadi käytännössä lainkaan fyysistä suorittamista. Myös kallio- ja jääkiipeilykokeiluissa pärjää lähes kuka vain normaalikuntoinen. Kiipeilytykset toteutamme aina osallistujien tason mukaan. Tarjolla on aina vähintään yksi helppo/helpohko kiipeilylinja, ja pyrimme löytämään myös lisähaastetta jo aiemmin kiipeilyä harrastaneille. Jos osallistujalla on liikuntarajoitteita, mietimme etukäteen, miten aktiviteetin voi järjestää. Haluamme palvella asiakkaitamme yksilöllisesti ja ennakkoluulottomasti. Köysiaktiviteeteissamme ei ole ehdottomia painorajoja. Tärkeintä kuitenkin on, että valjaat saadaan puettua tukevasti osallistujan päälle. Tarvittaessa voimme keskustella tästä etukäteen, ettei rajoitetta huomattaisi vasta paikan päällä.",
  },
  {
    question: "Rajoittaako koronavirus toimintaanne?",
    answer:
      "Koronavirus ei käytännössä vaikuta toimintaamme. Olemme pieni toimija, eikä tapahtumissamme liiku massoja. Tilausryhmän jäsenetkin tuntevat tyypillisesti toisensa jo ennakkoon. Noudatamme maskisuositusta, suosimme pienryhmiä ja toteutamme muutenkin kaikki aktiviteetit ulkosalla.",
  },
  {
    question: "Onko elämyksille ikärajaa?",
    answer:
      "Siltakeinun ikäraja on 16 vuotta. Myös muihin köysielämyksiin suosittelemme 16 vuoden ikää. Toki jos uskallusta riittää, muihin kuin siltakeinuun voi osallistua myös nuorempana. Kalliokiipeilykokeilussa ei ole käytännössä lainkaan ikärajaa, koska se luonnistuu ihan lapsiltakin. Jääkiipeilyssä taas fyysinen voima voi tulla lapsille kynnyskysymykseksi. Alle 18-vuotiailta haluamme vanhemman suostumuksen kirjallisena. Jos osallistuja on alaikäinen, keskustelemme asiasta mielellään etukäteen.",
  },
  {
    question: "Voivatko raskaana olevat osallistua aktiviteetteihin?",
    answer:
      "Järjestämme elämyksiä harkinnan mukaan myös raskaana oleville. Vauhdikkaan kyydin vuoksi emme kuitenkaan ota raskaana olevia siltakeinuun, mutta esimerkiksi köysilaskeutuminen tai kalliokiipeilykokeilu kokovartalovaljailla voi onnistua. Ole meihin yhteydessä etukäteen, niin keskustellaan aiheesta tarkemmin.",
  },
  {
    question: "Järjestättekö elämyksiä ympäri vuoden?",
    answer:
      "Vuonna 2023 aloitamme kiireiden vuoksi kauden vasta toukokuussa aktiivisimman sesongin alkaessa. Köydet ja muut turvavälineet kestävät Suomen vaihtelevat keliolosuhteet erinomaisesti myös talvella. Köysilaskeutuminen ja siltakeinu onnistuvat jokaisena vuodenaikana. Kalliokiipeily ei luonnollisestikaan onnistu talvella eikä jääkiipeily muulloin kuin talvella sopivissa jääolosuhteissa. Keväällä ja syksyllä kalliokiipeily on mahdollista, jos keliolot sen sallivat.",
  },
  {
    question: "Miten aktiviteetteihin tulee pukeutua / varustautua?",
    answer:
      "Kaikissa köysiaktiviteeteissa osallistujan päälle puetaan valjaat, joten hameita ja pitkiä takkeja kannattaa välttää. Tarvittaessa polttarisankarille voi varata vaihtovaatetta, kuten trikoot hameen alle. Yleisesti ottaen vaatetuksen ei tarvitse olla liikunnallinen, ellei kyse ole kiipeilystä. Esimerkiksi farkut sopivat oikein hyvin köysilaskeutumiseen ja siltakeinuun. Pitkät hiukset ja pitkä parta on hyvä sitoa suorituksen ajaksi, ja mahdollinen kampaus on oltava sellainen, että kypärän saa päähän (esim. ei nutturaa / ponnaria ylös). Talvella on hyvä olla mukana ohut tupsuton ja tarpeeksi ohut pipo, joka mahtuu kypärän alle. Roikkuvat korut, kuten korvakorut ja kaulakorut, kannattaa riisua ennen suoritusta. Silmälasit ja aurinkolasit voi halutessaan riisua vauhdikkaan siltakeinun ajaksi. Kiipeilykokeiluissa kiivetään välillä aktiivisesti hiki päällä ja levätään välillä odottaen omaa vuoroa. Näin ollen vaatetuksen on hyvä olla sen mukainen. Joustavat ja hieman hankausta kestävät housut ovat hyvä valinta.  Etenkin jääkiipeilyssä kannattaa kerrospukeutua ja varata taukojen ajaksi mukaan ainakin taukotakki ja lämpimät hanskat. Sormet voivat kylmettyä suorituksen jälkeen. Jääkiipeilyssä kenkiin kiinnitettävät jääraudat saattavat aiheuttaa naarmuja housuihin, joten valitse housusi sen mukaan.",
  },
  {
    question: "Onko osallistujia vakuutettu tapaturmien varalta?",
    answer:
      "Ei, mutta toiminnallamme on vastuuvakuutus. Jokaisen on siis hyvä huolehtia henkilökohtaisesta vakuutusturvastaan, kuten muissakin liikunta-aktiviteeteissa. Koulutetut ja kokeneet ohjaajamme huolehtivat kuitenkin jokaisen osallistujan turvallisuudesta.",
  },
  {
    question: "Miten ohjaajanne ovat kouluttautuneet?",
    answer:
      "Kaikki köysiturvallisuudesta vastaavat ohjaajamme ovat Suomen Kiipeilyliiton kouluttamia köysitoiminnan ohjaajia, kiipeilyohjaajia tai jääkiipeilyohjaajia. Lisäksi ohjaajamme ovat ensiaputaitoisia (EA2). Olet siis aina turvallisissa käsissä aktiviteeteissamme.",
  },
];

const seo = {
  title: "Usein kysytyt kysymykset | Huvimestari",
  description:
    "Katso vastaukset useimmiten kysyttyihin kysymyksiimme ja karista pelkosi! Toimintamme on turvallista ja ohjaajamme ovat koulutettuja.",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <Layout {...seo}>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Usein kysytyt kysymykset
            </h2>
            <div style={{ border: "none" }}>
              <br />
              Köysiaktiviteettimme herättävät joskus paljon kysymyksiä
              etukäteen. Olemme koonneet alle muutamia useimmin toistuvia
              kysymyksiä vastauksineen.
              <br />
              <br />
              Haluamme tarjota aina jokaiselle mahdollisimman turvallisen
              elämyksen. Jos jokin vielä mietityttää, laita viestiä tai soita!
              <br />
              <br />
            </div>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-orange">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
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
    </Layout>
  );
}
