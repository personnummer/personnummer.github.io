import { useMemo, useState } from 'react';
import personnummer from 'personnummer';
import gen from '@personnummer/generate';
import QRCode from 'react-qr-code';
import Block, { BlockProps } from '../Block';

const computePersonnummer = (y: number, m: number, d: number) =>
  gen(new Date(y, m, d));

const Generate = (props: BlockProps) => {
  const today = useMemo(() => new Date(), []);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());

  const pin = useMemo(() => {
    const y = Number.isFinite(year) ? year : today.getFullYear();
    const m = Math.min(12, Math.max(1, month)) - 1;
    const d = Math.min(31, Math.max(1, day));
    try {
      return computePersonnummer(y, m, d);
    } catch {
      return '';
    }
  }, [year, today, month, day]);

  const displayValue = personnummer.valid(pin) ? pin : 'not valid';

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
                min={1}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
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
                min={1}
                max={12}
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
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
                min={1}
                max={31}
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="px-3 mb-6 md:mb-0 md:mt-3">
            <p className="block tracking-wide mb-2">result</p>
            <input
              type="tel"
              readOnly
              value={displayValue}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="px-3">
          <div>
            <p className="block tracking-wide mb-2">qr code</p>
            <div className="flex justify-center">
              <QRCode title="qr code" size={100} value={displayValue} />
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Generate;
