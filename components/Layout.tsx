import React, { ReactNode } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children?: ReactNode;
  description?: string;
  title?: string;
};

const Layout = ({ children, description = "", title = "" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
