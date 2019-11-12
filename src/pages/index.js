import React, { useState } from 'react';
import { Highlight } from 'react-fast-highlight';
import Block from '../components/Block';
import personnummer from 'personnummer';

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

const getPersonnummerObj = ssn => {
  const output = {
    age: 'n/a',
    long: 'n/a',
    sex: 'n/a',
    short: 'n/a',
    valid: personnummer.valid(ssn),
  };

  if (output.valid) {
    output.age = personnummer.getAge(ssn);
    output.long = personnummer.format(ssn, true);
    output.short = personnummer.format(ssn);

    try {
      output.sex = personnummer.isMale(ssn) ? 'male' : 'female';
    } catch (err) {
      output.sex = 'n/a';
    }
  }

  return output;
}

export default () => {
  const [ssn, setSsn] = useState('');
  const [languageIndex, setLanguageIndex] = useState(0);
  const language = languages[languageIndex];
  const languagesLinks = languages.map((l, li) => (
    (
      <a href='#' className='text-blue-500 hover:underline' key={li} onClick={() => setLanguageIndex(li)}>{l.name}</a>
    )
  )).reduce((prev, curr) => [prev, ', ', curr]);

  const pnrObj = getPersonnummerObj(ssn);

  return (
    <>
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
        <p className="pt-3">Installation</p>
        <Highlight className='my-2' languages={['shell']}>
          {language.install}
        </Highlight>
        <p className="pt-3"><a href={language.link} className="text-blue-500 hover:underline">Read more</a></p>
      </Block>

      <Block title='features'>
        <ul className='list-decimal ml-4'>
          <li>validation</li>
          <li>formatting</li>
          <li>determine age</li>
          <li>determine sex</li>
        </ul>
        <p className="pt-3">not all features may be implemented in the different packages</p>
      </Block>

      <Block title='try'>
        <p className="pt-3">input</p>
        <input type="text" onChange={e => setSsn(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <p className="pt-3">result</p>
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                valid
              </td>
              <td className={`border px-4 py-2 ${pnrObj.valid ? 'text-green-500' : 'text-red-500'}`}>{pnrObj.valid ? 'yes' : 'no'}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                short format
              </td>
              <td className="border px-4 py-2">{pnrObj.short}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                long format
              </td>
              <td className="border px-4 py-2">{pnrObj.long}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                age
              </td>
              <td className="border px-4 py-2">{pnrObj.age}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                sex
              </td>
              <td className="border px-4 py-2">{pnrObj.sex}</td>
            </tr>
          </tbody>
        </table>
      </Block>

      <Block title='license' className="mb-20">
        <p>All hashids libraries are under <a href='https://opensource.org/licenses/MIT' className='text-blue-500 hover:underline'>MIT license</a>.</p>
      </Block>
    </>
  );
};
