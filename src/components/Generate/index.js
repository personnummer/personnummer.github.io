import { useState, useEffect } from 'react';
import personnummer from 'personnummer';
import generate from '@personnummer/generate';
import Block from '../Block';

const generatePersonnummer = (y, m, d) => {
  return generate(new Date(y, m, d));
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
            type="number"
            min="1"
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
            type="number"
            min="1"
            max="12"
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
            type="number"
            min="1"
            max="31"
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
        type="tel"
        defaultValue={personnummer.valid(pin) ? pin : 'not valid'}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </Block>
  );
};
