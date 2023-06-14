import { useState } from 'react';
import personnummer from 'personnummer';
import Block, { BlockProps } from '../Block';
import pkg from '../../../package.json';

type Output = {
  age: number;
  long: string;
  sex: string;
  short: string;
  con: boolean;
  interim: boolean;
  valid: boolean;
};

const personnummerOptions = {
  allowCoordinationNumber: true,
  allowInterimNumber: true
};

const getPersonnummerObj = (pin: string): Output => {
  const output = {
    age: 0,
    long: 'n/a',
    short: 'n/a',
    sex: 'n/a',
    con: false,
    interim: false,
    valid: personnummer.valid(pin, personnummerOptions)
  };

  if (typeof pin !== 'string') {
    return output;
  }

  try {
    const p = personnummer.parse(pin, personnummerOptions);

    if (output.valid) {
      output.age = p.getAge();
      output.long = p.format(true);
      output.short = p.format();
      output.sex = p.isMale() ? 'male' : 'female';
      output.con = p.isCoordinationNumber();
      output.interim = p.isInterimNumber();
    }
  } catch (err) {
    output.sex = 'n/a';
  }

  return output;
};

const Try = (props: BlockProps) => {
  const [pin, setPin] = useState('');
  const pnrObj = getPersonnummerObj(pin);

  return (
    <Block {...props}>
      <p className="pt-3">input</p>
      <input
        type="text"
        placeholder="YYMMDDXXXX"
        onChange={(e) => setPin(e.target.value)}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <p className="pt-3">result</p>
      <table className="table-fixed w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">valid</td>
            <td
              className={`border px-4 py-2 ${
                pnrObj.valid ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {pnrObj.valid ? 'yes' : 'no'}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">short format</td>
            <td className="border px-4 py-2">{pnrObj.short}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">long format</td>
            <td className="border px-4 py-2">{pnrObj.long}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">age</td>
            <td className="border px-4 py-2">{pnrObj.age}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">sex</td>
            <td className="border px-4 py-2">{pnrObj.sex}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">coordination number</td>
            <td
              className={`border px-4 py-2 ${
                pnrObj.con ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {pnrObj.con ? 'yes' : 'no'}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">interim number</td>
            <td
              className={`border px-4 py-2 ${
                pnrObj.interim ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {pnrObj.interim ? 'yes' : 'no'}
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-3 italic">
        using javascript version{' '}
        {pkg.devDependencies.personnummer.replace('^', '')}
      </p>
    </Block>
  );
};

export default Try;
