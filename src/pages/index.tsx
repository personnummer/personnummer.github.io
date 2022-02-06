import React from 'react';
import Block from '../components/Block';
import Implementations from '../components/Implementations';
import Try from '../components/Try';
import Generate from '../components/Generate';
import languagesData from '../data/languages';
import usersData from '../data/users';

const languages = languagesData.sort((a, b) => a.name.localeCompare(b.name));

const users = usersData.sort((a, b) => a.name.localeCompare(b.name));

const Index = () => (
  <>
    <Block title="Validate swedish personal identity numbers">
      <p className="pt-3">
        Personnummer is a{' '}
        <a
          href="https://github.com/personnummer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          small open-source project
        </a>{' '}
        created to validate, format and determine sex and age from swedish
        personal identity numbers. Support the project by becoming a backer or
        sponsor at{' '}
        <a
          href="https://opencollective.com/personnummer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          OpenCollective
        </a>
        .
      </p>
      <p className="pt-5 text-center">
        <span className="text-gray-500 pr-1">available in:</span>
        {languages.map((l, li) => (
          <span key={li}>
            {li + 1 === languages.length && (
              <span className="text-gray-500 pr-1">and for</span>
            )}
            <a
              className="inline-block text-blue-500 cursor-pointer hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href={l.link}
            >
              {l.name}
            </a>
            <span className="pr-1">
              {li >= languages.length - 2 ? '' : ','}
            </span>
          </span>
        ))}
      </p>
    </Block>

    <Block title="Features">
      <ul className="list-decimal ml-4">
        <li>validation</li>
        <li>formatting</li>
        <li>determine age</li>
        <li>determine sex</li>
        <li>determine if coordination number</li>
      </ul>
      <p className="pt-3">
        All features might not be implemented in all languages. Full
        specification can be found{' '}
        <a
          className="inline-block text-blue-500 cursor-pointer hover:underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/personnummer/meta/blob/master/README.md#package-specification-v3"
        >
          here
        </a>
        .
      </p>
    </Block>

    <Try title="Try" />

    <Generate title="Generate personal identity numbers" />

    <Implementations title="Implementations" />

    <p className="pt-3">
      Some implementations may be a{' '}
      <span className="rounded bg-gray-300 px-1">work in progress</span> if you
      find a bug, please open an issue in the specific implementation
      repository.
    </p>

    <p className="pt-3">
      If an implementation for your favorite language is missing, feel free to
      port it over from one of the existing versions. There are still plenty of
      languages to contribute to:{' '}
      <a
        target="_blank"
        href="https://www.r-project.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        R
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://programming-nu.github.io/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Nu
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://groovy-lang.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Groovy
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://julialang.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Julia
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://racket-lang.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Racket
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://fsharp.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        F#
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://clojure.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Clojure
      </a>
      ,{' '}
      <a
        target="_blank"
        href="https://www.erlang.org/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Erlang
      </a>
    </p>

    <Block title="Who is using Personnummer">
      <div className="mt-5 flex gap-2">
        {users
          .filter((m) => m.link && m.name && m.image)
          .map((m, mi) => (
            <a key={mi} href={m.link} target="_blank" rel="noopener noreferrer">
              <img
                src={m.image}
                alt={m.name}
                title={m.name}
                width={m.width ? m.width : 100}
                height={m.height ? m.height : 100}
                className="rounded-md border border-gray-200 border-solid"
              />
            </a>
          ))}
      </div>
      <div className="mt-5">
        <p>
          Add your logo{' '}
          <a
            href="https://github.com/personnummer/personnummer.github.io/blob/develop/src/data/users.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </Block>

    <Block title="License" className="mb-20">
      <p>
        All personnummer packages are released under the{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opensource.org/licenses/MIT"
          className="text-blue-500 hover:underline"
        >
          MIT license
        </a>
        .
      </p>
    </Block>
  </>
);

export default Index;
