import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  GiftIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import imageLogo from "../images/huvimestari-elamyspalvelut.png";

const services = [
  {
    name: "Köysilaskeutuminen",
    description: "Matti Nykäsen mäkihyppytornista Laajavuoressa",
    href: "/koysilaskeutuminen",
    icon: SparklesIcon,
  },
  {
    name: "Siltakeinu",
    description: "Kinakujan sillalta keskustan kupeessa",
    href: "/siltakeinu",
    icon: SparklesIcon,
  },
  {
    name: "Kalliokiipeily",
    description: "Luonnon kallioilla",
    href: "/kalliokiipeily",
    icon: SparklesIcon,
  },
  {
    name: "Jääkiipeily",
    description: "Luonnon jääputouksilla",
    href: "/jaakiipeily",
    icon: SparklesIcon,
  },
];
const callsToAction = [
  { name: "Varaa aika", href: "/varaa", icon: CalendarIcon },
  // { name: 'Tilaa lahjakortti', href: '/lahjakortti', icon: GiftIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-yellow z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Huvimestari</span>
              <Image
                src={imageLogo}
                alt="Huvimestari"
                width="250"
                height="88"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Avaa valikko</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-orange" : "text-gray-700",
                      "group bg-yellow rounded-md inline-flex items-center text-base font-medium hover:text-orange focus:outline-none"
                    )}
                  >
                    <span>Elämykset</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-orange" : "text-gray-700",
                        "ml-2 h-5 w-5 group-hover:text-orange"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-300"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-orange">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-orange space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-evenly">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-100 hover:text-gray-800"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="/varaa"
              className="text-base font-medium text-gray-700 hover:text-orange"
            >
              Varauskalenteri
            </a>
            <a
              href="/ukk"
              className="text-base font-medium text-gray-700 hover:text-orange"
            >
              UKK
            </a>
            <a
              href="/yhteystiedot"
              className="text-base font-medium text-gray-700 hover:text-orange"
            >
              Ota yhteyttä
            </a>
            <a
              href="/english"
              className="text-base font-medium text-gray-700 hover:text-orange"
            >
              In English
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-16 w-auto"
                    src="/img/huvimestari-elamyspalvelut.png"
                    alt="Huvimestari"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Sulje valikko</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-gray-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/varaa"
                  className="text-base font-medium text-orange hover:text-orange"
                >
                  Varauskalenteri
                </a>
                <a
                  href="/ukk"
                  className="text-base font-medium text-orange hover:text-orange"
                >
                  UKK
                </a>
                <a
                  href="/yhteystiedot"
                  className="text-base font-medium text-orange hover:text-orange"
                >
                  Ota yhteyttä
                </a>
                <a
                  href="/english"
                  className="text-base font-medium text-orange hover:text-orange"
                >
                  In English
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
