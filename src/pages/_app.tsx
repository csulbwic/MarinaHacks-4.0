import '@/styles/globals.css'

import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 3.0</title>
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
