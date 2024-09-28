import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { OverlayLayout } from '@/components';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 4.0</title>
        <link rel="icon" href="/images/logos_4.0/MarinaHacks_Logo_4.0_Pallete.png" />
      </Head>
      <Script 
        src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js" 
        strategy="lazyOnload" 
      />
      <link 
        type="text/css" 
        rel="stylesheet" 
        href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" 
      />
      <main>
        <OverlayLayout>
          <Component {...pageProps} />
        </OverlayLayout>
      </main>
    </>
  );
}
