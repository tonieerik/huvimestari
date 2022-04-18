import Layout from "../components/Layout";

const services = [
  {
    title: "Rappelling",
    price: "150 €",
    description:
      "Rappelling down the Matti Nykänen ski jump tower is the all-time favourite of our customers - and for a good reason. The 58-metre-high tower on top of the Laajavuori hill offers incredible views over Jyväskylä for all the group members to enjoy. The instructor will guide you and take care of your safety. Every attendee will determine their own speed.",
    imageSrc: "https://huvimestari.fi/img/koysilaskeutuminen.jpg",
    imageAlt: "Rappelling from ski jump tower",
    buttonText: "Book Now",
    buttonUrl: "/varaa",
  },
  {
    title: "Pendulum",
    price: "100 €",
    description:
      "The pendulum on the Kinakuja bridge is our second most popular activity. A pendulum is a giant swing tied to the structures of a bridge onto which a harnessed person jumps. Even though the bridge is relatively small, it gives a positive surprise – to some already when climbing over the rail. Compared to a bungee jump, the bridge swing ride is softer, which many customers have commended.",
    imageSrc: "https://huvimestari.fi/img/siltakeinu_screenshot_1.jpg",
    imageAlt: "Pendulum on Kinakuja bridge",
    buttonText: "Book Now",
    buttonUrl: "/varaa",
  },
  {
    title: "Rock Climbing",
    price: "200 €",
    description:
      "Climbing on natural rock formations is an excellent way to experience nature. Everyone who has tried indoor bouldering should try the sport out in the nature. There are lots of possibilities in the Jyväskylä region for this sport for everyone, even for beginners. This activity doesn't require previous climbing experience, strength or flexibility and it's suitable for almost everyone.",
    imageSrc: "https://huvimestari.fi/img/kalliokiipeily_screenshot_1.jpg",
    imageAlt: "Rock climber",
    buttonText: "Contact Us",
    buttonUrl: "/yhteystiedot",
  },
  {
    title: "Ice Climbing",
    price: "275 €",
    description:
      "Trying ice climbing is a wonderful winter experience. You get to try the equipment mountain climbers use: ice axes and crampons. The activity doesn't require any advance skills, a person with basic fitness level will do fine. The easiest routes are undulating 'positive' walls and the most difficult are vertical ice walls. Everyone can find an adequate challenge for themselves.",
    imageSrc: "https://huvimestari.fi/img/jaakiipeily_screenshot_1.jpg",
    imageAlt: "Ice climber",
    buttonText: "Contact Us",
    buttonUrl: "/yhteystiedot",
  },
];

const seo = {
  title: "Huvimestari | Activities in Jyväskylä",
  description:
    "Huvimestari offers experiences for bachelor parties, activities for birthday parties, and something a little different for company day outs.",
};

export default function English() {
  return (
    <Layout {...seo}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-2xl font-extrabold text-orange sm:text-5xl sm:tracking-tight lg:text-6xl">
              ADVENTUROUS DAY?
            </p>
            <p className="max-w-5xl mt-5 mx-auto text-xl text-gray-500">
              Would you like to experience the amazing views from a ski jump
              tower hanging on a rope, or take a wild ride on a pendulum? We
              offer experiences for bachelor parties, activities for birthday
              parties, and something a little different for company day outs.
              Huvimestari makes your day special and memorable!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white sm:py-8">
        {services.map((service) => (
          <div
            className="mx-auto pt-2 pb-20 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8"
            key={service.title}
          >
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
              <div className="lg:row-end-1 lg:col-span-4">
                <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-6 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                <div className="flex flex-col-reverse">
                  <div className="sm:mt-4">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                      {service.title}
                    </h1>
                  </div>
                </div>

                <p className="text-gray-500 mt-6">
                  {service.description} Prices for groups start from{" "}
                  {service.price}.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <a href={service.buttonUrl}>
                    <button
                      type="button"
                      className="w-full bg-orange border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white"
                    >
                      {service.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
