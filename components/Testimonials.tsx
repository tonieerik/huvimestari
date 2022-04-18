const testimonials = [
  {
    key: 1,
    quote:
      "Huvimestari järjesti työporukallemme oikein hauskat aktiviteetit. Tosi mukava ja ammattitaitoinen järjestäjä. Suosittelen lämpimästi!",
    author: "Saila | köysilaskeutuminen & siltakeinu",
  },
  {
    key: 2,
    quote:
      "Todella hyvä palvelu, osaava ohjeistus ja toteutus. Hyvä huumorintaju. Suosittelen ehdottomasti!",
    author: "Minsku | siltakeinu",
  },
  {
    key: 3,
    quote:
      "Kalliokiipeilykokeilussa meininki oli kuin parempienkin tuttujen seurassa. Haastetta ja kannustusta annettiin, eikä hetkeksikään tullut turvaton olo.",
    author: "Emilia | kalliokiipeily",
  },
  {
    key: 4,
    quote:
      "Köysilaskeutuminen Matti Nykäsen mäestä sujui rautaisten ammattilaisten ohjeistuksella turvallisesti. Upea kokemus, jota voin suositella kaikille!",
    author: "Teemu | köysilaskeutuminen",
  },
  {
    key: 5,
    quote:
      "Mainio ratkaisu, jos hakee jotain vähän erilaista. Voin suositella kelle vaan, joka ei pientä jännitystä kaihda!",
    author: "Mika | siltakeinu",
  },
  {
    key: 6,
    quote:
      "Vetäjältä rauhallista, asiallista ja ammattitaitoista toimintaa. Rauhallinen olemus auttoi laskeutujaa luottamaan myös välineisiin. Kiitos hienosta kokemuksesta!",
    author: "Lasse | köysilaskeutuminen",
  },
];

const Testimonials = () => (
  <section
    aria-labelledby="testimonial-heading"
    className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
  >
    <div className="max-w-2xl mx-auto lg:max-w-none">
      <h2
        id="testimonial-heading"
        className="text-2xl font-extrabold tracking-tight text-gray-900"
      >
        Mitä asiakkaamme ovat tykänneet?
      </h2>

      <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.key}
            className="pb-0 lg:pb-16 sm:flex lg:block"
          >
            <svg
              width={24}
              height={18}
              viewBox="0 0 24 18"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="flex-shrink-0 text-orange"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div className="mt-4 sm:ml-6 lg:ml-0">
              <p className="text-lg text-gray-600">{testimonial.quote}</p>
              <cite className="mt-4 block font-semibold not-italic text-gray-900">
                {testimonial.author}
              </cite>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
