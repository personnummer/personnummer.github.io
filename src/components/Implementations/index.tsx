import Block, { BlockProps } from '../Block';

const Implementations = (props: BlockProps) => (
  <Block {...props}>
    <div className="overflow-auto lg:overflow-visible">
      <table className="lg:table-fixed w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 lowercase">Package</th>
            <th className="px-4 py-2 lowercase">Pkg Version</th>
            <th className="px-4 py-2 lowercase">Spec Version</th>
            <th className="px-4 py-2 lowercase">Status</th>
            <th className="px-4 py-2 lowercase">Maintainer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/bash"
              >
                Bash
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/bash"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/bash?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/bash/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/bash/bash.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/cpp"
              >
                C/C++
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/cpp"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/cpp?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/cpp/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/cpp/ccpp.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/csharp"
              >
                C#
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/csharp"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/csharp?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/csharp/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/csharp/csharp.yml?branch=master"
                  alt="Build status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/johannestegner"
              >
                @Johannestegner
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/d"
              >
                D
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/d"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/d?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/d/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/d/d.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/dart"
              >
                Dart
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/dart"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/dart?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/dart/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/dart/test.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/elixir"
              >
                Elixir
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/elixir"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/elixir?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/elixir/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/elixir/elixir.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/go"
              >
                Go
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/go"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/go?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/go/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/go/go.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/haskell"
              >
                Haskell
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/haskell"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/haskell?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/haskell/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/haskell/haskell.yml?branch=main"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/java"
              >
                Java
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/java"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/java?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/java/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/haskell/haskell.yml?branch=main"
                  alt="GitHub Workflow"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/johannestegner"
              >
                @Johannestegner
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/js"
              >
                JavaScript
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/js"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/js?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v31"
              >
                3.1
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/js/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/js/nodejs.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/kotlin"
              >
                Kotlin
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/kotlin"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/kotlin?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v1"
              >
                1.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/kotlin/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/kotlin/test.yml?branch=master"
                  alt="GitHub Workflow"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/johannestegner"
              >
                @Johannestegner
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/lua"
              >
                Lua
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/lua"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/lua?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/lua/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/lua/lua.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/php"
              >
                PHP
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/php"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/php?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/php/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/php/php.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/rasmusbe"
              >
                @rasmusbe
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/perl"
              >
                Perl
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/perl"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/perl?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/perl/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/perl/perl.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/python"
              >
                Python
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/python"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/python?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/python/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/python/python.yml?branch=master"
                  alt="GitHub Workflow"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/buscedv"
              >
                @Buscedv
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/ruby"
              >
                Ruby
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/ruby"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/ruby?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/ruby/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/ruby/ruby.yml?branch=master"
                  alt="GitHub Workflow"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/VoxSecundus"
              >
                @VoxSecundus
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/rust"
              >
                Rust
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/rust"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/rust?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/rust/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/rust/rust.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/bombsimon"
              >
                @bombsimon
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/scala"
              >
                Scala
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/scala"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/scala?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/scala/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/scala/scala.yml?branch=master"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/swift"
              >
                Swift
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/swift"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/swift?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v1"
              >
                1.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/swift/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/swift/swift.yml?branch=master"
                  alt="GitHub Workflow"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/GoranLilja"
              >
                @GoranLilja
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/v"
              >
                V
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/v"
              >
                <img
                  src="https://img.shields.io/github/v/release/personnummer/v?style=flat-square"
                  alt="GitHub release (latest by date)"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/meta/#package-specification-v3"
              >
                3.0
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/personnummer/v/actions"
              >
                <img
                  src="https://img.shields.io/github/actions/workflow/status/personnummer/v/v.yml?branch=main"
                  alt="GitHub Workflow Status"
                />
              </a>
            </td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/frozzare"
              >
                @frozzare
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Block>
);

export default Implementations;
