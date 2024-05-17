import React from 'react';
import classes from './Jumbotron.module.css';


const Jumbotron = (props) => {
  return (
    <div className={classes.jumbo}>
        <h1>Agencja Żeglarska</h1>
        <p>szkolenia, kursy, rejsy turystyczne</p>
      {/* <div className={classes['jumbo-subcontainer']}>
      </div>
      <div className={classes['jumbo-subcontainer']}>
      </div> */}
    </div>
  );
};
export default Jumbotron;