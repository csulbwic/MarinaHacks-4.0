import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { NavBar, Footer } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 3.0</title>
      </Head>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
