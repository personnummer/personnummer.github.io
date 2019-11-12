const fetch = require('node-fetch');
const marked = require('marked');
const fs = require('fs');
const path = require('path');

(async () => {
  const res = await fetch('https://raw.githubusercontent.com/personnummer/meta/master/README.md')
  const text = await res.text();
  const html = marked(text).trim().replace(/(\r\n|\n|\r)/gm, '');
  const output = /<table>(.*?)<\/table>/.exec(html);

  if (!output) {
    console.log('Bad output');
    return;
  }

  let table = output[0];

  table = table.replace(/<table>/g, '<table className="table-fixed w-full">');
  table = table.replace(/<th>/g, '<th className="px-4 py-2">');
  table = table.replace(/<td>/g, '<td className="border px-4 py-2">');
  table = table.replace(/<a/g, '<a className="text-blue-500 hover:underline" ');
  table = table.replace(/><\/a>/g, '/></a>');

  const template = `import Block from '../Block';

  export default props => (
    <Block {...props}>
    ${table}
    </Block>
  );`

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'components', 'Implementations', 'index.js'), template);
  console.log('Updated Implementations component');
})();
