import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import * as ga from "../lib/ga";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <Script src="https://cdn.tailwindcss.com" />
      </Head>
      <Component {...pageProps} />
      <CookieConsent
        acceptOnScroll
        buttonStyle={{
          color: "white",
          background: "#E96D00",
          fontSize: "13px",
        }}
        buttonText="Jees, tuttu juttu!"
        flipButtons
        style={{ color: "#333333", background: "rgba(255, 236, 68, 0.9)" }}
      >
        Meidänkin sivustomme käyttää evästeitä. Käyttämällä sivustoa hyväksyt
        tämän. Kelaa alaspäin ja tämä banneri katoaa. Halutessasi voit tutustua{" "}
        <a href="/tietosuojaseloste" className="underline">
          tietosuojaselosteeseemme
        </a>
        .
      </CookieConsent>
    </>
  );
}

export default MyApp;
