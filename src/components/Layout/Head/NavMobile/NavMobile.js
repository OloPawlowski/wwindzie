import { Fragment } from 'react';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavItems from './MobileNavItems';
import classes from './NavMobile.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const NavMobile = (props) => {
  return (
    <Fragment>
      <Backdrop hideNavMenu={props.hideNavMenu}/>
      <div className={classes['mob-drawer']}>      
        <div className={classes['icon-container']}>
            <AiOutlineCloseCircle className={classes.icon} onClick={props.hideNavMenu}/>
        </div>
        <nav className={classes['mob-nav']}>
          <NavItems hideNavMenu={props.hideNavMenu}/>
        </nav>
      </div>
    </Fragment>
  );
};
export default NavMobile;
