import React, { useState } from 'react';
import { Highlight } from 'react-fast-highlight';
import Block from '../components/Block';
import Implementations from '../components/Implementations';
import Try from '../components/Try';

const languages = [
  {
    name: 'JavaScript',
    hljs: 'js',
    link: 'https://github.com/personnummer/js',
    code: `const personnummer = require('personnummer');

personnummer.valid('19121212+1212');`,
    install: 'npm install --save personnummer'
  },
  {
    name: 'Ruby',
    hljs: 'ruby',
    link: 'https://github.com/personnummer/ruby',
    install:
      "gem 'personnummer', :git => 'https://github.com/personnummer/ruby.git'",
    code: `require 'personnummer'

Personnummer::valid('19121212+1212')`
  },
  {
    name: 'Python',
    hljs: 'python',
    link: 'https://github.com/personnummer/python',
    install: `pip install personnummer

// or

pip3 install personnummer`,
    code: `from personnummer import personnummer

personnummer.valid('19121212+1212')`
  },
  {
    name: 'PHP',
    hljs: 'php',
    link: 'https://github.com/personnummer/php',
    install: 'composer require personnummer/personnummer',
    code: `use Personnummer\\Personnummer;

Personnummer::valid('19121212+1212');`
  },
  {
    name: 'Dart',
    hljs: 'dart',
    link: 'https://github.com/personnummer/dart',
    install: `1. Depend on it

dependencies:
  personnummer:

2. Install it

// with pub
$ pub get

// with flutter
$ flutter pub get
`,
    code: `import 'package:personnummer/personnummer.dart';

Personnummer.valid('19121212+1212');
`
  },
  {
    name: 'Go',
    hljs: 'go',
    link: 'https://github.com/personnummer/go',
    install: 'go get -u github.com/personnummer/go',
    code: `package main

import (
  personnummer "github.com/personnummer/go"
)

func main() {
  personnummer.Valid("19121212+1212")
}
`
  },
  {
    name: 'Java',
    hljs: 'java',
    link: 'https://github.com/personnummer/java',
    install: '???',
    code: `class Example {
  public void main(String[] args) {
    Personnummer.valid("19121212+1212");
  }
}`
  },
  {
    name: 'C#',
    hljs: 'csharp',
    link: 'https://github.com/personnummer/csharp',
    install: 'dotnet add package Personnummer',
    code: `use Personnummer;

class Example
{
  public Example()
  {
    Personnummer.Valid("19121212+1212")
  }
}
`
  },
  {
    name: 'Kotlin',
    hljs: 'kotlin',
    link: 'https://github.com/personnummer/kotlin',
    install: '???',
    code: `import personnummer.Personnummer

fun main(args: Array<String>) {
  Personnummer.valid("19121212+1212")
}`
  },
  {
    name: 'Swift',
    hljs: 'swift',
    link: 'https://github.com/personnummer/swift',
    install: `1. Add dependency to Podfile
pod 'Personnummer'

2. Then run
pod install`,
    code: 'Personnummer.isValid("19121212+1212")'
  }
].sort((a, b) => a.name.localeCompare(b.name));

export default () => {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <>
      <Block title='validate swedish social security numbers'>
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
          social security numbers.
        </p>
        <ul className='hidden md:flex list-reset border-b border-gray mt-3'>
          {languages.map((l, li) => (
            <li
              key={li}
              className={`${l.name === language.name ? '-mb-px' : ''} mr-1`}
            >
              <a
                className={`bg-white inline-block py-2 px-4 text-blue-500 font-semibold ${
                  l.name === language.name
                    ? 'border-l border-t border-r rounded-t'
                    : 'hover:text-blue-600'
                }`}
                key={li}
                onClick={() => setLanguage(l)}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <p className='mt-3 block md:hidden'>select language to show usage</p>
        <select
          name='languages'
          id='languages'
          value={language.name}
          className='block md:hidden mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={e =>
            setLanguage(languages.filter(l => l.name === e.target.value).pop())}
        >
          {languages.map((l, li) => (
            <option key={li} value={l.name}>
              {l.name}
            </option>
          ))}
        </select>
      </Block>

      <Block border={false}>
        <p>installation</p>
        <Highlight className='my-2' languages={['shell']}>
          {language.install}
        </Highlight>
        <p className='pt-3'>example</p>
        <Highlight className='my-2' languages={[language.hljs]}>
          {language.code}
        </Highlight>
        <p className='pt-3'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={language.link}
            className='text-blue-500 hover:underline'
          >
            read more
          </a>
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
          all features might not be implemented in all languages.
        </p>
      </Block>

      <Try title='try' />

      <Implementations title='implementations' />

      <Block title='license' className='mb-20'>
        <p>
          All personnummer packages are under{' '}
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
