import { useState, useEffect } from 'react';
import personnummer from 'personnummer';
import generate from '@personnummer/generate';
import QRCode from 'qrcode.react';
import Block, { BlockProps } from '../Block';

const generatePersonnummer = (y: number, m: number, d: number) =>
  generate(new Date(y, m, d));

const Generate = (props: BlockProps) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());
  const [pin, setPin] = useState('');

  const generate = (year: number, month: number, day: number) => {
    setPin(generatePersonnummer(year, month - 1, day));
  };

  useEffect(() => {
    generate(year, month, day);
  }, [year, month, day]);

  return (
    <Block {...props}>
      <div className="flex flex-wrap -mx-3 mb-2 pt-3">
        <div className="w-full md:w-5/6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide mb-2" htmlFor="g-year">
                year
              </label>
              <input
                id="g-year"
                name="g-year"
                type="number"
                min="1"
                defaultValue={year}
                onChange={(e) => {
                  setYear(Number(e.target.value));
                  generate(Number(e.target.value), month, day);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                onChange={(e) => {
                  setMonth(Number(e.target.value));
                  generate(year, Number(e.target.value), day);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                onChange={(e) => {
                  setDay(Number(e.target.value));
                  generate(year, month, Number(e.target.value));
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="px-3 mb-6 md:mb-0 md:mt-3">
            <p className="block tracking-wide mb-2">result</p>
            <input
              type="tel"
              readOnly
              value={personnummer.valid(pin) ? pin : 'not valid'}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="px-3">
          <div>
            <p className="block tracking-wide mb-2">qr code</p>
            <div className="flex justify-center">
              <QRCode
                size={100}
                value={personnummer.valid(pin) ? pin : 'not valid'}
              />
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Generate;
