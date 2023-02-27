import Logo from './Logo';
import Toggler from './Toggler';
// import NavMobile from './NavMobile/NavMobile';
import NavItems from './NavItems';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes['main-header']}>
      <Logo />
      <Toggler onShowMobileMenu={props.onShowMobileMenu} />
      <nav className={classes['main-nav']}>
        <NavItems />
      </nav>
    </header>
  );
};
export default Header;
