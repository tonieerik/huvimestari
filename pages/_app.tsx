import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script'

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script src="https://cdn.tailwindcss.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
