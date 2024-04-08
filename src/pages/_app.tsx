import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { OverlayLayout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 3.5</title>
        <link rel="icon" href="/images/shark-logo.png" />
      </Head>
      <main>
        <OverlayLayout>
          <Component {...pageProps} />
        </OverlayLayout>
      </main>
    </>
  );
}
