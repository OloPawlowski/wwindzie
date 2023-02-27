import { NavLink } from 'react-router-dom';
import classes from './MobileNavItems.module.css';

const NAVITEMS = [
  {
    name: 'W Windzie',
    sub: '/agencja-zeglarska-w-windzie',
  },
  {
    name: 'Szkolenie',
    sub: '/szkolenie-zeglarskie',
  },
  {
    name: 'Mazury',
    sub: '/rejsy-turystyczne-szkoleniowe-na-mazurach',
  },
  {
    name: 'Edukacja',
    sub: '/edukacja-zeglarska',
  },
  {
    name: 'Pogoda',
    sub: '/zeglarska-prognoza-pogody',
  },
  {
    name: 'Kontakt',
    sub: '/kontakt-Aleksander-Pawlowski',
  },
];

const NavItems = (props) => {
  
  const navItems = NAVITEMS.map((item) => (
    <li className={classes['main-nav_item']} key={item.name}>
      <NavLink
        className={(navData) => navData.isActive ? classes.active : '' }
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
