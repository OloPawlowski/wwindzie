import React from 'react';
import { Link } from 'react-router-dom';
import mazuryImage from '../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-instruktor-zeglarstwa.webp';
import classes from './Mazury.module.css';

const Mazury = (props) => {
  return (
    <article className={classes['mazury-container']}>
      <div className={classes['mazury-description']}>
        <h2>
          To piękne miejsce do odpoczynku
          <br />i świetne do uprawiania żeglarstwa,
          <br />
          znamy tam każdy zakątek..
        </h2>
      </div>
      <div className={classes['mazury-photo']}>
          <h2 className={classes['mazury-photo_h']}>
            zorganizuj rejs lub szkolenie żeglarskie na mazurach
          </h2>
        <Link to="/rejsy-turystyczne-szkoleniowe-na-mazurach">
          <img src={mazuryImage} alt="szkolenie żeglarskie na Mazurach" />
        </Link>
      </div>
    </article>
  );
};
export default Mazury;
