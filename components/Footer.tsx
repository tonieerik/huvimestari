import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const navigation = {
  contacts: [
    {
      name: "Huvimestari Oy (3027726-4)",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange inline mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    // {
    //   name: "0400 627 010",
    //   href: "tel:+358400627010",
    //   icon: () => (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6 text-orange inline mr-2"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: "toni@huvimestari.fi",
      href: "mailto:toni@huvimestari.fi",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange inline mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      ),
    },
    {
      name: "Tietosuojaseloste",
      href: "/tietosuojaseloste",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange inline mr-2"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
  ],
  medias: [
    {
      name: "Facebook",
      href: "https://facebook.com/huvimestari",
      icon: () => (
        <svg
          fill="#ff7800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/huvimestari",
      icon: () => (
        <svg
          fill="#ff7800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          {" "}
          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const clearForm = () => {
    setEmail("");
    setLoading(false);
    setSent(false);
  };

  const handleSubmit = () => {
    setLoading(true);

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "newsletter",
        content: { email },
      }),
    }).then((response: any) => {
      if (response.status === 201) {
        setSent(true);
        setLoading(false);
        setTimeout(clearForm, 4000);
      }
    });
  };
  return (
    <footer className="bg-yellow" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:pb-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-orange tracking-wider uppercase">
              Yhteystiedot
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.contacts.map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base text-gray-700 hover:text-gray-900"
                    >
                      <item.icon aria-hidden="true" />
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <item.icon aria-hidden="true" />
                      {item.name}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-orange tracking-wider uppercase">
              Sosiaalinen media
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.medias.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex flex-row text-base text-gray-700 hover:text-gray-900"
                    target="_blank"
                  >
                    <item.icon aria-hidden="true" />
                    <span className="ml-2">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-orange tracking-wider uppercase">
              Liity sähköpostilistallemme
            </h3>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email" className="sr-only">
                Sähköpostiosoite
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className={
                  "appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base placeholder-gray-500 focus:placeholder-gray-400 " +
                  (loading || sent ? "text-gray-400" : "text-gray-800")
                }
                placeholder="Sähköpostiosoitteesi"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || sent}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="button"
                  className={
                    "w-full flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white " +
                    (sent ? "bg-green" : "hover:bg-orange bg-orange")
                  }
                  onClick={handleSubmit}
                  disabled={loading || sent}
                >
                  {sent ? "LIITYTTY" : loading ? "LIITYTÄÄN " : "LIITY"}{" "}
                  <PulseLoader loading={loading} color="white" size="5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
