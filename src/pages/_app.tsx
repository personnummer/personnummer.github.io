import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Source_Sans_3 } from 'next/font/google';
import '../styles/main.css';

const font = Source_Sans_3({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => (
  <div className={font.className}>
    <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto p-5 w-full">
      <Head>
        <title>Personnummer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1 className="text-4xl md:text-5xl text-center text-gray-700">
          <img
            alt="Personnummer"
            src="/apple-touch-icon.png"
            className="w-8 sm:w-12 inline-block"
          />{' '}
          personnummer
        </h1>
      </div>
      <Component {...pageProps} />
    </div>
    <div className="border-t border-solid border-gray-300 pt-5 my-5">
      <p className="text-center text-gray-600">
        Copyright © {new Date().getFullYear()} Personnummer and Contributors
      </p>
      <p className="text-center text-gray-600">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/personnummer/personnummer.github.io"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </p>
      <p className="text-center text-gray-600 mt-2">
        Fredrik &quot;Frozzare&quot; Forsmo (1991-2026) started this project,
        co-founded it and shaped its core. This site, and every library behind
        it, carries his work. He is missed.
      </p>
    </div>
  </div>
);

export default App;
