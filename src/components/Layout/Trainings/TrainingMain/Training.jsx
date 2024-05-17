import React from 'react';
import TrainingDescript from './TrainingDescript';
import TrainingCards from './TrainingCards';
// import classes from './Training.module.css';


const Training = (props) => {
  return (   
      <article>
        <TrainingDescript />
        <TrainingCards />
      </article>   
  );
};
export default Training;
