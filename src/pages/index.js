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
    install: 'gem \'personnummer\', :git => \'https://github.com/personnummer/ruby.git\'',
    code: `require 'personnummer'

Personnummer::valid('19121212+1212')`,
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
    install: 'composer require frozzare/personnummer',
    code: `use Frozzare\\Personnummer\\Personnummer;

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
    hljs: `go`,
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
    link: '',
    install: 'pod \'Personnummer\'',
    code: `Personnummer.valid("19121212+1212")`
  }
];

export default () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const language = languages[languageIndex];
  const languagesLinks = languages.map((l, li) => (
    (
      <a href='#' className='text-blue-500 hover:underline' key={li} onClick={() => setLanguageIndex(li)}>{l.name}</a>
    )
  )).reduce((prev, curr) => [prev, ', ', curr]);

  return (
    <>
      <Block title='validate swedish social security numbers'>
        <p className='pt-3'>
        personnummer is a <a href="https://github.com/personnummer" target="_blank" className="text-blue-500 hover:underline">small open-source project</a> that validates, formatting and determine sex and age from swedish social security numbers.
        </p>
        <p className='pt-3'>
        available in {languagesLinks}
        </p>
      </Block>

      <Block title={language.name.toLowerCase() + ' usage'}>
      <p>installation</p>
        <Highlight className='my-2' languages={['shell']}>
          {language.install}
        </Highlight>
        <p className="pt-3">example</p>
        <Highlight className='my-2' languages={[language.hljs]}>
          {language.code}
        </Highlight>
        <p className="pt-3"><a target="_blank" href={language.link} className="text-blue-500 hover:underline">read more</a></p>
      </Block>

      <Block title='features'>
        <ul className='list-decimal ml-4'>
          <li>validation</li>
          <li>formatting</li>
          <li>determine age</li>
          <li>determine sex</li>
        </ul>
        <p className="pt-3">all features might not be implemented in all languages.</p>
      </Block>

      <Try title='try' />

      <Implementations title='implementations' />

      <Block title='license' className="mb-20">
        <p>All hashids libraries are under <a target="_blank" href='https://opensource.org/licenses/MIT' className='text-blue-500 hover:underline'>MIT license</a>.</p>
      </Block>
    </>
  );
};
