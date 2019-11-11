import React from 'react';
import App from 'next/app';
import '../styles/main.css';

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <div className='container max-auto'>
          <Component {...pageProps} />
        </div>
      </div>
    );
  }
}
