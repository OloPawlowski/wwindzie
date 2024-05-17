import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import classes from './Slides.module.css';

const Slides = (props) => {
  return props.images.map((img, id) => (
    <div
      className={classes[id === props.current ? 'main-image' : 'transform']}
      key={id}
    >
      <IoIosArrowDropleftCircle
        className={classes.arrowL}
        onClick={props.prevImage}
      />
      <IoIosArrowDroprightCircle
        className={classes.arrowR}
        onClick={props.nextImage}
      />
      <h2 className={classes.title}>{id}</h2>
      {id === props.current && (
        <img className={classes.img} src={img.image} alt={img.alt} />
      )}
    </div>
  ));
};
export default Slides;
