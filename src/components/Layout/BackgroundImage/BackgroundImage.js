import backImage from '../../../assets/zachód_z_żagłówka_IMG_7147.JPG';
import classes from './BackgroundImage.module.css';

const BackgroundImage = (props) => {
  return (
    <div className={classes['container']}>
      <img src={backImage} alt="jacht na żaglach na jeziorze w złotych kolorach zachodzącego słońca" />
    </div>
  );
};
export default BackgroundImage;
