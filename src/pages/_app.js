import React from 'react';
import App from 'next/app';
import '../styles/main.css';

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <div className='container max-auto'>
          <div className='mt-10 mx-auto w-3/6'>
            <div>
              <h1 className='text-6xl text-center text-gray-700'>personnummer</h1>
            </div>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    );
  }
}
