import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/main.css';

export default class Application extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto p-5 w-full">
        <Head>
          <title>Personnummer</title>
        </Head>
        <div>
          <h1 className="text-4xl md:text-5xl text-center text-gray-700">
            <img
              src="/apple-touch-icon.png"
              className="w-8 sm:w-12 inline-block"
            />{' '}
            personnummer
          </h1>
        </div>
        <Component {...pageProps} />
      </div>
    );
  }
}
