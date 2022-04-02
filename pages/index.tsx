import Layout from "../components/Layout";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const seo = {
  title: "Huvimestari | Elämyksiä Jyväskylässä",
  description: "Tutustu sivuillamme unohtumattomiin elämyksiimme, jotka sopivat niin polttareihin kuin virkistyspäiviin: köysilaskeutuminen, siltakeinu ja kiipeily."
}

const IndexPage = () => (
  <Layout {...seo}>
     <video className="w-full bg-gray-200" autoPlay muted loop>
       <source
         src="https://deo43u2u9.mo.cloudinary.net/img/elamysbanneri.mp4"
         type="video/mp4"
       />
     </video>
     <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Elämyksellistä hupia Jyväskylässä
          </h2>
          <p className="max-w-5xl mt-12 mx-auto text-xl text-gray-500">
            Miltä tuntuisi kokea mäkihyppytornin huikeat maisemat köysilaskeutuen, pudottautua siltakeinun vauhdikkaaseen kyytiin tai testata omaa kanttiaan kiipeilykalliolla? Köysielämys on takuuvarma valinta, jos kaipaat vauhdikasta ohjelmaa polttareihin, synttäreille tai yrityksen virkistyspäivään.
          </p>
          <p className="max-w-5xl mt-5 mx-auto text-xl text-gray-500">
            Köysilaskeutuminen, siltakeinu, kalliokiipeily ja jääkiipeily ovat Jyväskylän seudulla ainutkertaisia elämyksiä, joita ei ihan joka päivä pääse testaamaan. Osaavan ja kannustavan ammattilaisen ohjauksessa saat kuitenkin ylittää itsesi turvallisesti – huumoria ja rentoa asennetta unohtamatta.
          </p>
          <p className="max-w-5xl mt-5 mx-auto text-xl text-gray-500">
            Mikä köysiaktiviteeteistamme kutsuu juuri sinua? Tai kenet haluaisit yllättää ikimuistoisella elämyksellä? Teemme päivästäsi sellaisen, joka ei hevillä unohdu!
          </p>
        </div>
      </div>
    </div>

    <Services />
    <Testimonials />
  </Layout>
);

export default IndexPage;
