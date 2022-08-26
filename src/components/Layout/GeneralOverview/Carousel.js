import { useState, useEffect } from 'react';
import image2 from '../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-rejsy-mazurskie.webp';
import image1 from '../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-szkolenie.webp';
import image3 from '../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-kurs-zeglarski.webp';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import Jumbotron from './Jumbotron';
import classes from './Carousel.module.css';

const IMAGES = [
  {
    title: 'SZKOLENIE ŻEGLARSKIE',
    sub: 'Zalew Zegrzyński, Mazury',
    image: image1,
    alt: 'jacht w przechyle widok z kokpitu',
  },
  {
    title: 'REJSY TURYSTYCZNE',
    sub: 'Mazury',
    image: image2,
    alt: 'wyspa na jeziorze o zachodzie słońca',
  },
  {
    title: 'DOSZKALANIE',
    sub: 'Mazury',
    image: image3,
    alt: 'dwa jachty pod żaglami na jeziorze',
  },
];

const Carousel = () => {
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const slide = setTimeout(() => {
      setCurrent(current + 1);
    }, 4400);    
    return () => clearTimeout(slide);
    
  }, [current]);

  if (current > IMAGES.length - 1) {
    setCurrent(0);
  };
  if (current < 0) {
    setCurrent(2);
  };

  const prevImage = () => {
    setCurrent(current - 1);
  };
  const nextImage = () => {
    setCurrent(current + 1);
  };
  const images = IMAGES.map((img, idx) => (          
    <div key={idx} className={ classes[idx === current ? 'div' : 'transform']  }>
        <h1 className={classes.title}>{img.title}</h1>
        <h4 className={classes['sub-title']}>{img.sub}</h4>              
        {current === idx && <img className={classes.img} src={img.image} alt={img.alt} />}
      </div>
  ));
  return (
    <section className={classes['section-carousel']}>
      <div className={classes['main-image']}>
        <IoIosArrowDropleftCircle
          className={classes.arrowL}
          onClick={prevImage}
          />
        <IoIosArrowDroprightCircle
          className={classes.arrowR}
          onClick={nextImage}
          />
        {images}
      </div>
      <Jumbotron />
    </section>
  );
};
export default Carousel;
