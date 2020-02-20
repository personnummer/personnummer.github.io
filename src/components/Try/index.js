import { useState } from 'react';
import personnummer from 'personnummer';
import Block from '../Block';

const getPersonnummerObj = ssn => {
  const output = {
    age: 'n/a',
    long: 'n/a',
    sex: 'n/a',
    short: 'n/a',
    valid: personnummer.valid(ssn)
  };

  if (typeof ssn !== 'string') {
    return output;
  }

  try {
    const p = personnummer.parse(ssn);

    if (output.valid) {
      output.age = p.getAge();
      output.long = p.format(true);
      output.short = p.format();
      output.sex = p.isMale() ? 'male' : 'female';
    }
  } catch (err) {
    output.sex = 'n/a';
  }

  return output;
};

export default props => {
  const [ssn, setSsn] = useState('');
  const pnrObj = getPersonnummerObj(ssn);

  return (
    <Block {...props}>
      <p className='pt-3'>input</p>
      <input
        type='text'
        onChange={e => setSsn(e.target.value)}
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
        </tbody>
      </table>
      <p className='mt-3 italic'>using javascript version 3.0.0</p>
    </Block>
  );
};
