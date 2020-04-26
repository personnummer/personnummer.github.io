import { useState, useEffect } from 'react';
import personnummer from 'personnummer';
import Block from '../Block';

const randomNumber = () => Math.floor(Math.random() * 9);

const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const padZero = i => (i < 10 ? `0${i}` : i);

const luhn = str => {
  let v = 0;
  let sum = 0;

  str += '';

  for (let i = 0, l = str.length; i < l; i++) {
    v = str[i];
    v *= 2 - (i % 2);
    if (v > 9) {
      v -= 9;
    }
    sum += v;
  }

  return Math.ceil(sum / 10) * 10 - sum;
};

const generatePersonnummer = (y, m, d) => {
  let c = '';

  y = `${padZero(y)}`;
  if (y.length > 2) {
    c = y.slice(0, 2);
    y = y.slice(2, 4);
  }

  const pin = `${y}${padZero(m)}${padZero(d)}${'' + randomNumber()}${'' +
    randomNumber()}${'' + randomNumber()}`;
  return `${c}${pin}${luhn(pin)}`;
};

export default props => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());
  const [pin, setPin] = useState('');

  const generate = (year, month, day) => {
    setPin(generatePersonnummer(year, month, day));
  };

  useEffect(() => {
    generate(year, month, day);
  }, [year, month, day]);

  return (
    <Block {...props}>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide mb-2" htmlFor="g-year">
            year
          </label>
          <input
            id="g-year"
            name="g-year"
            type="text"
            defaultValue={year}
            onChange={e => {
              setYear(e.target.value);
              generate(year, month, day);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide mb-2" htmlFor="g-month">
            month
          </label>
          <input
            id="g-month"
            name="g-month"
            type="text"
            defaultValue={month}
            onChange={e => {
              setMonth(e.target.value);
              generate(year, month, day);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block tracking-wide mb-2" htmlFor="g-day">
            day
          </label>
          <input
            id="g-day"
            name="g-day"
            type="text"
            defaultValue={day}
            onChange={e => {
              setDay(e.target.value);
              generate(year, month, day);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <button
            className="lg:mt-8 lg:float-right flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={() => generate(year, month, day)}
          >
            generate
          </button>
        </div>
      </div>
      <p className="block tracking-wide mb-2">result</p>
      <input
        type="text"
        defaultValue={personnummer.valid(pin) ? pin : 'not valid'}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </Block>
  );
};
