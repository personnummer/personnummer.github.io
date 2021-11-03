const fetch = require('node-fetch');
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

(async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/personnummer/meta/master/README.md'
  );
  const text = await res.text();
  const html = marked
    .parse(text)
    .trim()
    .replace(/(\r\n|\n|\r)/gm, '');
  const output = /<table>(.*?)<\/table>/.exec(html);

  if (!output) {
    console.log('Bad output');
    return;
  }

  let table = output[0];

  table = table.replace(
    /<table>/g,
    '<table className="lg:table-fixed w-full">'
  );
  table = table.replace(/<th>/g, '<th className="px-4 py-2 lowercase">');
  table = table.replace(/<td>/g, '<td className="border px-4 py-2">');
  table = table.replace(
    /<a/g,
    '<a className="text-blue-500 hover:underline" rel="noopener noreferrer" '
  );
  table = table.replace(/><\/a>/g, '/></a>');

  const template = `import Block from '../Block';

  const Implementations = (props) => (
    <Block {...props}>
      <div className="overflow-auto lg:overflow-visible">
        ${table}
      </div>
    </Block>
  );

  export default Implementations;`;

  prettier
    .resolveConfig(path.join(__dirname, '..', '.prettierrc'))
    .then((options) => {
      fs.writeFileSync(
        path.join(
          __dirname,
          '..',
          'src',
          'components',
          'Implementations',
          'index.js'
        ),
        prettier.format(template, options)
      );
      console.log('Updated Implementations component');
    });
})();
