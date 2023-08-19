import Layout from "../components/Layout";

const seo = {
  title: "Tietosuojaseloste | Huvimestari",
  description: "Huvimestari Oy:n tietosuojaseloste",
};

const PrivacyPage = () => (
  <Layout {...seo}>
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8 text-sm">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-wide uppercase mt-1 font-extrabold text-orange sm:text-5xl sm:tracking-tight lg:text-6xl">
            Tietosuojaseloste
          </h1>
        </div>
        <div className="mt-12 text-gray-500">
          Olemme päivittäneet tietosuojaselosteemme ja tietosuojakäytäntömme
          vastaamaan Euroopan Unionin 25.5.2018 voimaan astunutta
          tietosuoja-asetusta (GDPR). Tietosuojaseloste on päivitetty
          11.12.2022.
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">1. Rekisterinpitäjä</h2>
          <p className="mt-2">Huvimestari Oy</p>
          <p>Y-tunnus: 3207726-4</p>
          <p>Wilhelm Schildtin katu 28 A 13, 40740 Jyväskylä</p>
          <p>toni@huvimestari.fi</p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">2. Rekisteriasioita hoitava henkilö</h2>
          <p className="mt-2">Nimi: Toni Leppänen</p>
          <p>Yhteystiedot: toni@huvimestari.fi, 0400 627 010</p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">3. Rekisterin nimi</h2>
          <p className="mt-2">Huvimestari Oy:n asiakasrekisteri</p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            4. Henkilötietojen käsittelyn tarkoitus
          </h2>
          <p className="mt-2">
            Henkilötietojen kerääminen auttaa meitä palvelemaan sinua paremmin.
            Käsittelemme tietojasi asiakas- tai yhteistyösuhteen hoitamiseen tai
            palveluidemme markkinoimiseen. Varausjärjestelmämme on
            yksityistilaisuuksien varaamista varten, ja yhteystiedot
            tallennetaan ko. varausta koskevaa yhteydenpitoa varten.
            Sähköpostilistaamme hyödynnämme markkinointiin. Sähköpostilistalle
            liittyminen on vapaaehtoista ja siitä voi poistua silloin kun haluaa
            lähetyksessä olevan ohjeen mukaisesti tai ilmoittamalla meille siitä
            suoraan yllä olevaan osoitteeseen.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">5. Keiden tietoja käsittelemme?</h2>
          <p className="mt-2">
            Käsittelemme tietojasi tämän tietosuojaselosteen mukaisesti, jos
            olet:
          </p>
          <ul className="list-disc ml-6">
            <li>Asiakkaamme</li>
            <li>Potentiaalinen asiakkaamme</li>
            <li>Yhteistyökumppanimme</li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">6. Mitä tietoja käsittelemme?</h2>
          <p className="mt-2">
            Käsittelemme vain välttämättömiä henkilötietoja. Näitä tietoja ovat:
          </p>
          <ul className="list-disc ml-6">
            <li>Nimi</li>
            <li>Sähköpostiosoite</li>
            <li>Puhelinnumero</li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">7. Mistä saamme tiedot?</h2>
          <p className="mt-2">
            Keräämme tietosi, kun teet varauksen tai ilmoittaudut
            sähköpostilistallemme. Jos olet potentiaalisen yrityksen edustaja,
            saatamme kerätä tietosi julkisesti verkossa, esimerkiksi yrityksesi
            kotisivuilta.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">8. Kuka muu käsittelee tietojasi?</h2>
          <p className="mt-2">
            Käytämme seuraavia palveluntarjoajia tietojen käsittelyssä:
          </p>
          <ul className="list-disc ml-6">
            <li>Google Calendar (varausjärjestelmä)</li>
            <li>Google Drive (tapahtumiin ilmoittautuminen)</li>
          </ul>

          <p className="mt-2">
            Kolmansilla osapuolilla ei ole oikeutta käyttää meiltä saamiaan
            tietoja. Emme luovuta tai jaa tietojasi kolmansille osapuolille.
            Emme koskaan myy tietojasi kenellekään.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">9. Tietojen käsittelyaika</h2>
          <p className="mt-2">
            Käsittelemme tietoja vain niin kauan kuin tarvitsemme niitä
            rekisterin tarkoituksen mukaisessa toiminnassa. Voit pyytää
            tietojesi poistamista rekisteristä jokaisessa lähettämässämme
            markkinointiviestissämme olevan poistumislinkin kautta tai
            lähettämällä pyynnön sähköpostitse osoitteeseen: toni@huvimestari.fi
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">10. Tietojen suojaamisen periaate</h2>
          <p className="mt-2">
            Huolehdimme tarvittavista turvatoimista, etteivät henkilötietosi
            joutuisi vääriin käsiin. Käsittelemme henkilötietoja vain
            tietoturvallisiksi todetuilla tietojärjestelmillä, jotka vastaavat
            tyypillisimpiin tietoturvariskeihin. Rajaamme pääsyn tietoihin vain
            niille henkilöille, jotka ovat siihen oikeutettuja.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            11. Tietojen siirto EU:n tai ETA:n ulkopuolelle
          </h2>
          <p className="mt-2">
            Tietoja ei siirretä Huvimestari Oy:n toimesta EU:n tai ETA:n
            ulkopuolelle.
          </p>

          <p className="mt-2">
            Poikkeus tietojen siirtoon on Googlen palvelut, joissa
            rekisteritietoja (ei arkaluontoisia) säilytetään. Google Inc. voi
            tallentaa käyttöehtojensa mukaisesti tallennettuja tietoja EU:n
            ulkopuoliseen datakeskukseen. Google on sitoutunut noudattamaan
            EU-komission mallisopimuslausekkeita taatessaan riittävän
            tietosuojatason käsittelemilleen tiedoille (Data Processing and
            Security Terms 2.0). Palvelun käyttö perustuu asetus (EU) 2016/679,
            22 § mukaisesti palveluntoimittajan Privacy Shield- sertifikaattiin.
          </p>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">
            12. Rekisteröityjen oikeudet henkilötietojen käsittelyssä
          </h2>

          <p className="mt-2">
            Sinulla on seuraavat oikeudet, joiden käyttämistä koskevat pyynnöt
            tulee tehdä osoitteeseen: toni@huvimestari.fi:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Oikeus tarkastaa ja saada kopio, mitä sinua koskevia tietoja
              henkilörekisteriin on tallennettu.
            </li>
            <li>Oikeus pyytää sinua koskevien henkilötietojen korjaamista.</li>
            <li>Oikeus vaatia sinua koskevien henkilötietojen poistamista.</li>
            <li>Oikeus kieltää sinuun kohdistuva suoramarkkinointi.</li>
            <li>Oikeus tehdä valitus valvontaviranomaiselle</li>
          </ul>
        </div>
        <div className="mt-4 text-gray-500">
          <h2 className="font-semibold">13. Evästeet</h2>
          <p className="mt-2">
            Vieraillessasi verkkosivuillamme Huvimestari Oy voi kerätä tietoa
            palvelujen käyttöön, käyttömääriin ja muuhun tilastointiin liittyen
            sekä käsitellä ja analysoida kyseistä tietoa. Palvelujen sisällön
            käytön seuraamiseksi sekä niiden käytön helpottamiseksi ja
            nopeuttamiseksi Huvimestari Oy voi käyttää ns. evästeitä (cookies).
            Eväste on lyhyt tekstitiedosto, jonka verkkopalvelin tallentaa
            käyttäjän kiintolevylle. Tällä tavalla keräämme tietoja siitä, miten
            ja milloin palveluja käytetään, kehittääksemme niitä edelleen
            käyttäjäystävällisemmiksi. Evästeiden avulla kerättävillä tiedoilla
            ei voida tunnistaa yksittäisiä käyttäjiä. Edellytämme, että hyväksyt
            evästeiden käytön voidaksesi käyttää Huvimestari Oy:n sähköisiä
            palveluja.
          </p>
          <h3 className="mt-2 font-semibold">Evästeiden käyttö</h3>
          <p className="mt-2">
            Huvimestari Oy:n evästeiden käytön tarkoituksena on analysoida ja
            kehittää palveluita. Evästeitä voidaan käyttää myös mm. Huvimestari
            Oy:n internetsivujen kävijäseurantaan sekä mainonnan tehokkuuden
            mittaukseen. Käytämme evästeiden käsittelyyn analytiikkaohjelmia
            eikä käyttäjästä kerätä minkäänlaisia henkilötietoja. Evästeiden
            avulla seuraamme mm. kuinka kauan sivujen latautuminen vie aikaa ja
            millaista tietoa kävijät etsivät sekä paikannamme sellaisia sivuston
            osia, jotka eivät välttämättä toimi niin kuin pitäisi, jotta virheet
            voidaan korjata. Huvimestari Oy voi käyttää sivustojen käytöstä
            kerättyä tietoa myös selaimelle kohdennetun mainonnan tai sisällön
            tuottamiseen. Huvimestari Oy voi luoda kohderyhmiä sen perusteella,
            millä internetsivustoilla tietyt selaimet ovat vierailleet. Näille
            kohderyhmille Huvimestari Oy voi esittää niitä todennäköisesti
            kiinnostavaa mainontaa tai sisältöä.
          </p>

          <p className="mt-2">
            Huvimestari.fi sivustolla käytämme Google Analytics
            -verkkoanalytiikkajärjestelmää.
          </p>
          <p className="mt-2">Analyyttisten evästeiden avulla voimme:</p>
          <ul className="list-disc ml-6">
            <li>
              Saada tilastotietoja verkkosivustossa vierailuista: käyttäjien
              lukumääristä, eri sivujen käytöstä, eri sivuilla vietetystä
              ajasta, käyttäjien selailutavoista,
            </li>
            <li>
              Parantaa verkkosivustoa tarjoamalla räätälöityä sisältöä ja
              mukautettua tietoa,
            </li>
            <li>
              Ymmärtää, miten ihmiset reagoivat esimerkiksi
              sähköpostikampanjoihimme: sähköpostin avaamisajankohta ja
              kestoaika jne.
            </li>
          </ul>
          <p className="mt-2 font-semibold">Evästeistä voi kieltäytyä</p>
          <p className="mt-2">
            Huomaa, että evästeistä kieltäytyminen voi tietyissä tapauksissa
            johtaa toimintojen teknisiin rajoituksiin verkkosivuillamme.
          </p>
          <p className="mt-2">
            Useimpien selainohjelmien Ohje-valikosta saat tietoa siitä, miten
            selaintasi estetään hyväksymästä uusia evästeitä, miten saat
            selaimesi ilmoittamaan uuden evästeen vastaanottamisesta tai miten
            estät evästeiden käytön kokonaan. Lisäksi voit poistaa käytöstä tai
            tuhota vastaavanlaiset tiedot, joita selaimien lisäosat voivat
            käyttää, muuttamalla lisäosan asetuksia tai käymällä sen valmistajan
            verkkosivustossa. Voit myös estää seurannan asettamalla opt out
            -evästeen.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default PrivacyPage;
