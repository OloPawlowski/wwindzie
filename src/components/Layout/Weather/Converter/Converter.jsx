import { useState } from 'react';
import classes from './Converter.module.css';

const Converter = () => {
  const [ms, setMs] = useState('');
  const [kmh, setKmh] = useState('');
  const [kts, setKts] = useState('');
  const [bft, setBft] = useState('');

   const bftToMs = (bft) => {
     return Math.round(0.836 * Math.sqrt(Math.pow(bft, 3)) * 100) / 100;
   };
console.log('converter running');
  const beaufort = (ms) => {
    ms = Math.abs(ms);
    if (ms <= 0.2) {
      return 0;
    }
    if (ms <= 1.5) {
      return 1;
    }
    if (ms <= 3.3) {
      return 2;
    }
    if (ms <= 5.4) {
      return 3;
    }
    if (ms <= 7.9) {
      return 4;
    }
    if (ms <= 10.7) {
      return 5;
    }
    if (ms <= 13.8) {
      return 6;
    }
    if (ms <= 17.1) {
      return 7;
    }
    if (ms <= 20.7) {
      return 8;
    }
    if (ms <= 24.4) {
      return 9;
    }
    if (ms <= 28.4) {
      return 10;
    }
    if (ms <= 32.6) {
      return 11;
    }    
    return 12;
  };
  const msChangeHandler = (event) => {
    const ms = event.target.value;
    const kmh = ms * 3.6;
    const kts = ms * 1.94;
    const bft = beaufort(ms);

    setMs(ms);
    setKmh(kmh.toFixed(2));
    setKts(kts.toFixed(2));
    setBft(bft);
  };
  const kmhChangeHandler = (event) => {
    const kmh = event.target.value;
    const ms = kmh / 3.6;
    const kts = ms * 1.94;
    const bft = beaufort(ms);

    setKmh(kmh);
    setMs(ms.toFixed(2));
    setKts(kts.toFixed(2));
    setBft(bft);
  };
  const ktsChangeHandler = (event) => {
    const kts = event.target.value;
    const ms = kts / 1.94;
    const kmh = ms * 3.6;
    const bft = beaufort(ms);
    
    setKmh(kmh.toFixed(2));
    setMs(ms.toFixed(2));
    setKts(kts);
    setBft(bft);
  };
  const bftChangeHandler = (event) => {
    const bft = event.target.value;
    const ms = bftToMs(bft);
    const kmh = ms * 3.6;
    const kts = ms * 1.94;

    setKmh(kmh.toFixed(2));
    setMs(ms.toFixed(2));
    setKts(kts.toFixed(2));
    setBft(bft);};

  return (
    <div className={classes.items}>
      <form className={classes.form}>
        <div className={classes.item}>
          <label className={classes.label} htmlFor="ms">
            m/s
          </label>
          <input
            className={classes.input}
            name="ms"
            type="number"
            step={0.1}
            min={0}
            precision={2}
            placeholder="wpisz"
            value={ms}
            onChange={msChangeHandler}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label} htmlFor="kmh">
            km/h
          </label>
          <input
            className={classes.input}
            name="kmh"
            type="number"
            step={1}
            precision={2}
            min={0}
            placeholder="wpisz"
            value={kmh}
            onChange={kmhChangeHandler}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label} htmlFor='kts'>węzły</label>
          <input
            className={classes.input}
            name="kts"
            type="number"
            step={1}
            min={0}
            precision={2}
            placeholder="wpisz"
            value={kts}
            onChange={ktsChangeHandler}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label} htmlFor='bft'>Beauforta</label>
          <input
            className={classes.input}
            name="bft"
            type="number"
            step={1}
            min={0}
            max={12}
            precision={2}
            placeholder="wpisz"
            value={bft}
            onChange={bftChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};
export default Converter;
