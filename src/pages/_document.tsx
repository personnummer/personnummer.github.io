import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta
        name="description"
        content="Validate swedish personal identity numbers"
      />
      <meta property="og:title" content="Personnummer" />
      <meta
        property="og:description"
        content="Validate swedish personal identity numbers"
      />
      <meta
        property="og:image"
        content="https://personnummer.dev/android-chrome-512x512.png"
      />
      <meta name="twitter:title" content="Personnummer" />
      <meta
        name="twitter:description"
        content="Validate swedish personal identity numbers"
      />
      <meta
        name="twitter:image"
        content="https://personnummer.dev/android-chrome-512x512.png"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
