const products = [
  {
    id: 1,
    name: 'Köysilaskeutuminen',
    href: '/koysilaskeutuminen',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    imageSrc: 'https://huvimestari.fi/img/koysilaskeutuminen_small.jpg',
    imageAlt: 'Köysilaskeutuminen mäkihyppytornista',
  },
  {
    id: 2,
    name: 'Siltakeinu',
    href: '/siltakeinu',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    imageSrc: 'https://huvimestari.fi/img/siltakeinu_small.jpg',
    imageAlt: 'Siltakeinu Kinakujan sillalla',
  },
  {
    id: 3,
    name: 'Jääkiipeily',
    href: '/jaakiipeily',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    imageSrc: 'https://huvimestari.fi/img/jaakiipeily_small.jpg',
    imageAlt: 'Jääkiipeily luonnon jääputouksilla',
  },
  {
    id: 4,
    name: 'Kalliokiipeily',
    href: '/kalliokiipeily',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    imageSrc: 'https://huvimestari.fi/img/kalliokiipeily_small.jpg',
    imageAlt: 'Kalliokiipeily luonnon kalliolla',
  },
]

export default function Services() {
  return (
    <div className="bg-yellow-100">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-2xl text-orange">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-700">{product.intro}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
