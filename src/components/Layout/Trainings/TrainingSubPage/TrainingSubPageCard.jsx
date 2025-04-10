import React from 'react';
import classes from './TrainingSubPageCard.module.css';

const TrainingSubPageCard = (props) => {
  return (
    <article className={classes.article}>
      <div className={classes['article-header']}>
        <h3>{props.title}</h3>
      </div>
      <h4>{props.subtitle}</h4>
      <div className={classes['article_sub-container']}>
        <p>{props.content}</p>
      </div>
      <div className={classes['article_sub-container_photo']}>
        <img src={props.image} alt="" />
      </div>
    </article>
  );
};
export default TrainingSubPageCard;
