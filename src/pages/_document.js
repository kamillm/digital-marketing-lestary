/* eslint-disable react/no-danger */
import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="id">
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-512x512.png" />
      <meta name="theme-color" content="#343a40" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
