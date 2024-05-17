import classes from './WeatherItem.module.css';

const WeatherItem = (props) => {
  return (
    <div className={classes['weather-item']}>       
      <a
        className={classes['weather-item_image-anchor']}
        href={props.hreference}
        rel='noreferrer'
        target= "_blank"
      >
        <div className={classes['weather-image_container']}>
          <img
            className={classes['weather-image']}
            src={props.photo}
            alt={props.alter}
          />
        </div>
      </a>
    </div>
  );
};
export default WeatherItem;
