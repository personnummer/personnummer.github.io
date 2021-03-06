import React from 'react';
import Block from '../components/Block';
import Implementations from '../components/Implementations';
import Try from '../components/Try';
import Generate from '../components/Generate';

const languages = require('../data/languages').default.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const Index = () => {
  return (
    <>
      <Block title='validate swedish personal identity numbers'>
        <p className='pt-3'>
          personnummer is a{' '}
          <a
            href='https://github.com/personnummer'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            small open-source project
          </a>{' '}
          that validates, formatting and determine sex and age from swedish
          personal identity numbers. support the project by becoming a backer or
          sponsor via{' '}
          <a
            href='https://opencollective.com/personnummer'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            OpenCollective
          </a>
          .
        </p>
        <p className='pt-5 text-center'>
          <span className='text-gray-500 pr-1'>available in:</span>
          {languages.map((l, li) => (
            <span key={li}>
              {li + 1 === languages.length && (
                <span className='text-gray-500 pr-1'>and for</span>
              )}
              <a
                className='inline-block text-blue-500 cursor-pointer hover:underline'
                rel='noopener noreferrer'
                target='_blank'
                href={l.link}
              >
                {l.name}
              </a>
              <span className='pr-1'>
                {li >= languages.length - 2 ? '' : ','}
              </span>
            </span>
          ))}
        </p>
      </Block>

      <Block title='features'>
        <ul className='list-decimal ml-4'>
          <li>validation</li>
          <li>formatting</li>
          <li>determine age</li>
          <li>determine sex</li>
          <li>determine if coordination number</li>
        </ul>
        <p className='pt-3'>
          all features might not be implemented in all languages, you can read
          the full specification{' '}
          <a
            className='inline-block text-blue-500 cursor-pointer hover:underline'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/personnummer/meta/blob/master/README.md#package-specification-v3'
          >
            here
          </a>
          .
        </p>
      </Block>

      <Try title='try' />

      <Generate title='generate personal identity numbers' />

      <Implementations title='implementations' />

      <p className='pt-3'>
        some implementations may be in{' '}
        <span className='rounded bg-gray-300 px-1'>work in progress</span> if
        you find a bug, please open an issue in the specific implementation
        repository.
      </p>

      <p className='pt-3'>
        if an implementation in your favorite language is missing, feel free to
        port it over from one of the existing versions. there's still plenty of
        languages to contribute in:{' '}
        <a
          target='_blank'
          href='https://www.r-project.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          R
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://programming-nu.github.io/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Nu
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://groovy-lang.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Groovy
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://julialang.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Julia
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://racket-lang.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Racket
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://fsharp.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          F#
        </a>
        ,{' '}
        <a
          target='_blank'
          href='https://clojure.org/'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Clojure
        </a>
      </p>

      <Block title='license' className='mb-20'>
        <p>
          all personnummer packages are under{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://opensource.org/licenses/MIT'
            className='text-blue-500 hover:underline'
          >
            MIT license
          </a>
          .
        </p>
      </Block>
    </>
  );
};

export default Index;
