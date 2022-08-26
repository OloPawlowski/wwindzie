// import {Fragment} from 'react';
import classes from './InstructorCard.module.css';

const InstructorCard = (props) => {
  return (
   <div className={classes.instructor}>
      <div className={classes['instructor-image_container']}>
        <img src={props.photo} alt={props.photoAlt} className={classes['instructor-image']} />
      </div>
      <div className={classes['instructor-info']}>
        <h2>{props.name}</h2>
        <span>{props.licence1}</span>
        <p>{props.licence2}</p>
        <p>{props.licence3}</p>
        <p>{props.description}</p>
      </div>
   </div>
   
   
  );
};
export default InstructorCard;
