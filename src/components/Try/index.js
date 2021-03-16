import { useState } from 'react';
import personnummer from 'personnummer';
import Block from '../Block';
import pkg from '../../../package.json';

const getPersonnummerObj = (pin) => {
  const output = {
    age: 'n/a',
    long: 'n/a',
    sex: 'n/a',
    short: 'n/a',
    con: false,
    valid: personnummer.valid(pin)
  };

  if (typeof pin !== 'string') {
    return output;
  }

  try {
    const p = personnummer.parse(pin);

    if (output.valid) {
      output.age = p.getAge();
      output.long = p.format(true);
      output.short = p.format();
      output.sex = p.isMale() ? 'male' : 'female';
      output.con = p.isCoordinationNumber();
    }
  } catch (err) {
    output.sex = 'n/a';
  }

  return output;
};

const Try = (props) => {
  const [pin, setPin] = useState('');
  const pnrObj = getPersonnummerObj(pin);

  return (
    <Block {...props}>
      <p className='pt-3'>input</p>
      <input
        type='text'
        onChange={(e) => setPin(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <p className='pt-3'>result</p>
      <table className='table-fixed w-full'>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>valid</td>
            <td
              className={`border px-4 py-2 ${
                pnrObj.valid ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {pnrObj.valid ? 'yes' : 'no'}
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>short format</td>
            <td className='border px-4 py-2'>{pnrObj.short}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>long format</td>
            <td className='border px-4 py-2'>{pnrObj.long}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>age</td>
            <td className='border px-4 py-2'>{pnrObj.age}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>sex</td>
            <td className='border px-4 py-2'>{pnrObj.sex}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>coordination number</td>
            <td
              className={`border px-4 py-2 ${
                pnrObj.con ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {pnrObj.con ? 'yes' : 'no'}
            </td>
          </tr>
        </tbody>
      </table>
      <p className='mt-3 italic'>
        using javascript version{' '}
        {pkg.dependencies.personnummer.replace('^', '')}
      </p>
    </Block>
  );
};

export default Try;
