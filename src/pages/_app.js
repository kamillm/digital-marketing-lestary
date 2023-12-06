/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');

    AOS.init({
      easing: 'ease',
      once: true,
      offset: 50,
      delay: 50,
      duration: 1000,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress color="#000" />
      <Component {...pageProps} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};

export default MyApp;
