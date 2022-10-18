import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Link from 'next/link'

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'

import { repositoryName } from '../services/prismic'

import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <SessionProvider session={pageProps.session}>
        <Header />
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </SessionProvider>
    </PrismicProvider>
  );
}

export default MyApp;
