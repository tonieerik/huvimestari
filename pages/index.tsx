import Layout from "../components/Layout";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const seo = {
  title: "Huvimestari | Elämyksiä Jyväskylässä",
  description: "Toiminta on päättynyt",
};

const IndexPage = () => (
  <Layout {...seo}>
    <video className="w-full bg-gray-200" autoPlay muted loop>
      <source
        src="https://deo43u2u9.mo.cloudinary.net/img/elamysbanneri.mp4"
        type="video/mp4"
      />
    </video>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide uppercase mt-1 font-extrabold text-orange sm:text-5xl sm:tracking-tight lg:text-4xl">
            Huvimestarin elämystoiminta on päättynyt
          </h2>
          <p className="max-w-4xl mt-12 mx-auto text-xl text-gray-500">
            Toimimme menestyksekkäästi liki vuosikymmenen Jyväskylässä
            hauskuuttaen juhlaporukoita ja yrityksiä. Muut kiireet ovat
            työllistäneet vuosi vuodelta enemmän emmekä löytäneet toiminnalle
            jatkajaa. Päätimme lopullisesti toiminnan elokuuhun 2024 resurssien
            rajallisuuden vuoksi.
          </p>
          <p className="max-w-4xl mt-6 mx-auto text-xl text-gray-500">
            Menneitä elämysten täyttämiä vuosia ei voi kuin muistella suurella
            lämmöllä. Tämä oli unelmien työ! Kiitos kaikille asiakkaillemme ja
            yhteistyökumppaneillemme kuluneista vuosista!
          </p>

          <p className="max-w-4xl mt-6 mx-auto text-xl text-gray-500">
            &#9829; Toni ja Nelli
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
