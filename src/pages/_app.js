import React from 'react';
import App from 'next/app';
import '../styles/main.css';

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <div className='flex flex-col flex-1 md:justify-center max-w-3xl mx-auto p-5 w-full'>
        <div>
          <h1 className='text-4xl md:text-6xl text-center text-gray-700'>personnummer</h1>
        </div>
        <Component {...pageProps} />
      </div>
    );
  }
}
