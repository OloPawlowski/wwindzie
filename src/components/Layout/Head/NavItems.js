import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

const NAVITEMS = [
  {
    id: '1',
    name: 'W Windzie',
    sub: '/wwindzie',
  },
  {
    id: '2',
    name: 'Szkolenie',
    sub: '/szkolenie',
  },
  {
    id: '3',
    name: 'Mazury',
    sub: '/rejsy-turystyczne-szkoleniowe-na-mazurach',
  },
  {
    id: '6',
    name: 'Edu.',
    sub: '/edukacja',
  },
  {
    id: '4',
    name: 'Pogoda',
    sub: '/pogoda',
  },
  {
    id: '5',
    name: 'Kontakt',
    sub: '/kontakt',
  },
];

const NavItems = () => { 
  return (  
      <ul className={classes['main-nav__items']}>  
      {NAVITEMS.map((item) => (
        <li className={classes['main-nav__item']}  key={item.id} >
          <NavLink 
            activeClassName={classes.active} 
            to={item.sub}
          >
            {item.name}
          </NavLink>
        </li>))}
      </ul> 
  );
};
export default NavItems;
