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
            Elämyksellinen päivä?
          </h2>
          <p className="max-w-xl mt-12 mx-auto text-xl text-gray-500">
            Haluatko kokea mäkihyppytornin huikeat maisemat köyden varassa tai pudottautua siltakeinun hurjaan kyytiin?
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Tarjoamme elämyksiä polttareihin, aktiviteettia synttäreille ja jotain vähän erilaista yrityksen virkistyspäivään.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Huvimestari tekee päivästäsi erityisen ja ikimuistoisen!
          </p>
        </div>
      </div>
    </div>

    <Services />
    <Testimonials />
  </Layout>
);

export default IndexPage;
