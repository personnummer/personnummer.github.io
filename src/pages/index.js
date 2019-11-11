import React, { useState } from 'react';
import { Highlight } from 'react-fast-highlight';
import Block from '../components/Block';

const languages = [
  {
    name: 'JavaScript',
    hljs: 'js',
    code: `const personnummer = require('personnummer');

const valid = personnummer.valid('19121212+1212');`,
    text: 'Install from npm...'
  },
  {
    name: 'Ruby',
    hljs: 'ruby',
    code: `require 'personnummer'

Personnummer::valid('19121212+1212')`,
    text: 'Install from rubygems...'
  },
  {
    name: 'Python'
  },
  {
    name: 'PHP'
  },
  {
    name: 'Dart'
  },
  {
    name: 'Go'
  }
];

export default () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const language = languages[languageIndex];
  const languagesLinks = languages.map((l, li) => (
    (
      <a href='#' className='text-blue-500' key={li} onClick={() => setLanguageIndex(li)}>{l.name}</a>
    )
  )).reduce((prev, curr) => [prev, ', ', curr]);

  return (
    <div className='mt-10 mx-auto w-3/6'>
      <div className=''>
        <h1 className='text-6xl text-center text-gray-700'>personnummer</h1>
      </div>

      <Block title='validate swedish social security numbers'>
        <p className='pt-3'>
        available in {languagesLinks}
        </p>
        <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Block>

      <Block title={'example in ' + language.name.toLowerCase()}>
        <Highlight className='my-2' languages={[language.hljs]}>
          {language.code}
        </Highlight>
        <p>{language.text}</p>
      </Block>

      <Block title='features'>
        <ul className='list-decimal ml-4'>
          <li>validate</li>
          <li>format</li>
          <li>determine age</li>
          <li>determine sex</li>
        </ul>
      </Block>

      <Block title='license'>
        <p>All hashids libraries are under <a href='https://opensource.org/licenses/MIT' className='text-blue-500'>MIT license</a>.</p>
      </Block>
    </div>
  );
};
