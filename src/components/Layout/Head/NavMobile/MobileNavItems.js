import { NavLink } from 'react-router-dom';
import classes from './MobileNavItems.module.css';

const NAVITEMS = [
  {
    name: 'W Windzie',
    sub: '/wwindzie',
  },
  {
    name: 'Szkolenie',
    sub: '/szkolenie',
  },
  {
    name: 'Mazury',
    sub: '/rejsy-turystyczne-szkoleniowe-na-mazurach',
  },
  {
    name: 'Edukacja',
    sub: '/edukacja',
  },
  {
    name: 'Pogoda',
    sub: '/pogoda',
  },
  {
    name: 'Kontakt',
    sub: '/kontakt',
  },
];

const NavItems = (props) => {
  
  const navItems = NAVITEMS.map((item) => (
    <li className={classes['main-nav_item']} key={item.name}>
      <NavLink
        activeClassName={classes.active}
        to={item.sub}
        onClick={props.hideNavMenu}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return <ul className={classes['main-nav_items']}>{navItems}</ul>;
};
export default NavItems;
