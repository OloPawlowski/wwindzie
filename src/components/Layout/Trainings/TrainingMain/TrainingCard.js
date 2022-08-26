import { Link } from 'react-router-dom';
import classes from './TrainingCard.module.css';

const TrainingCard = (props) => {
  return (
    <div className={classes['training-card__container']}>
      <Link to={props.link}>
        <h3 className={classes['training-card__name']}>{props.name}</h3>
        <div className={classes['training-card__image__container']}>
          <img src={props.img} alt={props.alt} />
        </div>
      </Link>
    </div>
  );
};
export default TrainingCard;
