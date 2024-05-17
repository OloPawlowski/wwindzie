import React from 'react';
import classes from './SocialMedia.module.css';

const SocialMedia = (props) => {
  return (
    <li className={classes['media-item']}>
      <a href={props.link} target="blank">
        <div className={classes['media-item_icon']} >
          {props.logo}
        </div>
      </a>
    </li>
  );
};
export default SocialMedia;
