import { Link } from 'react-router-dom';
import logoImage from '../../../assets/avatar2.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link
        className={classes['main-header__brand']}
        to="/agencja-zeglarska-w-windzie"
      >
        <img src={logoImage} alt="logo W Windzie" />
      </Link>
    </div>
  );
};
export default Logo;
