import { Disclosure, Tab } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";

interface Image {
  id: number;
  name: string;
  src: string;
  alt: string;
}

interface Feature {
  name: string;
  description: string;
  icon: any;
}

interface Product {
  name: string;
  price: string;
  ctaText: string;
  ctaLink?: string;
  heroImage: string;
  images: Image[];
  description: string;
  details: any[];
  features: Feature[];
}

const classNames = (...classes: string[]) => classes.join(" ");

export default ({
  product,
  title,
  description,
}: {
  product: Product;
  title: string;
  description: string;
}) => (
  <Layout title={title} description={description}>
    <img className="w-full" src={product.heroImage} />
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Elämyksen tiedot</h2>
              <p className="text-xl text-gray-900">{product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Kuvaus</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-10 flex sm:flex-col1">
              <button
                disabled={!product.ctaLink}
                onClick={() => {
                  window.location.href = product.ctaLink || "";
                }}
                type="submit"
                className="mx-2 max-w-xs flex-1 bg-orange border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:text-black focus:outline-none sm:w-full"
              >
                {product.ctaText}
              </button>
              {/* <button
                type="submit"
                className="mx-2 max-w-xs flex-1 bg-orange border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:text-black focus:outline-none sm:w-full"
              >
                Tilaa lahjakortti
              </button> */}
            </div>

            <Tab.Group as="div" className="mt-10 flex flex-col-reverse">
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img
                              src={image.src}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-orange" : "ring-transparent",
                              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-yellow p-3 shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-black"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {product.details.length > 0 && (
              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Lisätiedot
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  "text-orange text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-orange"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-orange"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 prose prose-sm text-sm"
                          >
                            <ul role="list">
                              {detail.items.map((item: any) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
