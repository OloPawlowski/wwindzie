import React from 'react';
import classes from './TrainingDescript.module.css';

const TrainingDescript = (props) => {
  return (
    <div className={classes['training-descript_container']}>
      <div className={classes['training-subcontainer']}>
        <h2 className={classes.descript1}>
          Naucz się żeglować<br /> i doskonal swoje umiejętności
        </h2>
      </div>
      <div className={classes['training-subcontainer']}>
        <h2 className={classes.descript2}>
          Proponujemy Ci<br />indywidualne szkolenie żeglarskie,<br />dostosowane do
          Twoich terminów,<br />możliwości, predyspozycji i preferencji.
        </h2>
      </div>
    </div>
  );
};
export default TrainingDescript;
