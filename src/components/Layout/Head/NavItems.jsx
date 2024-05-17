import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

const NAVITEMS = [
  {
    id: '1',
    name: 'W Windzie',
    sub: '/agencja-zeglarska-w-windzie',
  },
  {
    id: '2',
    name: 'Szkolenie',
    sub: '/szkolenie-zeglarskie',
  },
  {
    id: '3',
    name: 'Mazury',
    sub: '/rejsy-turystyczne-szkoleniowe-na-mazurach',
  },
  {
    id: '6',
    name: 'Edu.',
    sub: '/edukacja-zeglarska',
  },
  {
    id: '4',
    name: 'Pogoda',
    sub: '/zeglarska-prognoza-pogody',
  },
  {
    id: '5',
    name: 'Kontakt',
    sub: 'kontakt-Aleksander-Pawlowski',
  },
];

const NavItems = () => { 
  return (  
      <ul className={classes['main-nav__items']}>  
      {NAVITEMS.map((item) => (
        <li className={classes['main-nav__item']}  key={item.id} >
          <NavLink  
          className={navData => navData.isActive ? classes.active : undefined}
            to={item.sub}
          >
            {item.name}
          </NavLink>
        </li>))}
      </ul> 
  );
};
export default NavItems;
