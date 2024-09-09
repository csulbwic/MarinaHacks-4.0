import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { OverlayLayout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 4.0</title>
        <link rel="icon" href="/images/logos_4.0/3.png" />
      </Head>
      <main>
        <OverlayLayout>
          <Component {...pageProps} />
        </OverlayLayout>
      </main>
    </>
  );
}
