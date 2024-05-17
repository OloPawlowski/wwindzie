import WeatherItem from './WeatherItem';
import imgwLogo from '../../../assets/IMGW.png';
import icmLogo from '../../../assets/ICM.png';
import ventuskyLogo from '../../../assets/Ventusky.png';
import windfinderLogo from '../../../assets/Windfinder.png';
import windyLogo from '../../../assets/WINDY.png';
import yrLogo from '../../../assets/YR.png';
import Converter from './Converter/Converter';
import { FaWind }  from 'react-icons/fa';
import classes from './WeatherPack.module.css';

const WEATHERZEGRZE = [
  {
    key: '4',
    hreference: "https://www.windy.com/?52.465,21.025,13,m:e6AagKf",
    alter: 'logo Windy.com',
    photo: windyLogo,
  },
  {
    key: '1',
    hreference: "https://www.meteo.pl/um/php/meteorogram_id_um.php?ntype=0u&id=2799",
    alter: 'logo icm',
    photo: icmLogo,
  },
  {
    key: '5',
    hreference: "https://www.windfinder.com/?utm_source=www.windfinder.com&utm_medium=web&utm_campaign=redirect#13/52.4643/21.0381/sfc",
    alter: 'logo windfinder',
    photo: windfinderLogo,
  },
  {
    key: '2',
    hreference: "https://meteo.imgw.pl/dyn/#group=nwp&param=spd-10-agl&model=arome2k0&loc=52.44908234384399,21.03143692016602,13" ,
    alter: 'logo IMGW',
    photo: imgwLogo,
  },
  {
    key: '3',
    hreference: "https://www.ventusky.com/pl/52.43472;21.05006",
    alter: 'logo Ventusky',
    photo: ventuskyLogo,
  },
  {
    key: '6',
    hreference: "https://www.yr.no/en/forecast/graph/2-753416/Poland/Mazovia/Powiat%20legionowski/Zegrze%20Po%C5%82udniowe",
    alter: 'logo YR',
    photo: yrLogo,
  },
];
const WEATHERMAZURY = [
  {
    key: '4',
    hreference: "https://www.windy.com/54.025/21.765?54.020,21.798,12",
    alter: 'logo Windy',
    photo: windyLogo,
  },
  {
    key: '1',
    hreference: "http://www.meteo.pl/um/php/meteorogram_id_um.php?ntype=0u&id=1489",
    alter: 'logo ICM',
    photo: icmLogo,
  },
  {
    key: '5',
    hreference: "https://www.windfinder.com/?utm_source=www.windfinder.com&utm_medium=web&utm_campaign=redirect#9/53.9035/21.8971/sfc/2020-10-28T14:00Z",
    alter: 'logo Windfinder',
    photo: windfinderLogo,
  },
  {
    key: '2',
    hreference: "https://meteo.imgw.pl/dyn/#group=nwp&param=spd-10-agl&model=arome2k0&loc=54.023956114362484,21.762542724609375,10",
    alter: 'logo IMiGW',
    photo: imgwLogo,
  },
  {
    key: '3',
    hreference: "https://www.ventusky.com/?p=53.91;21.75;8&l=wind-10m&w=dark" ,
    alter: 'logo Ventusky',
    photo: ventuskyLogo,
  },
  {
    key: '6',
    hreference: "https://www.yr.no/en/map/weather/2-772195/Poland/Warmia-Masuria/Powiat%20gi%C5%BCycki/Gi%C5%BCycko",
    alter: 'logo YR',
    photo: yrLogo,
  },
];

const WeatherPack = () => {
  const weatherZz = WEATHERZEGRZE.map((item) => (
    <WeatherItem
      key={item.key}
      photo={item.photo}
      alter={item.alter}
      hreference={item.hreference}
    />
  ));
  const weatherWjm = WEATHERMAZURY.map((item) => (
    <WeatherItem
      key={item.key}
      photo={item.photo}
      alter={item.alter}
      hreference={item.hreference}
    />
  ));
  return (
    <div className={classes['weather-pack']}>
      <div className={classes['weather-pack_sections']}>
        <div className={classes['weather-pack_sub_section']}>
          <h4>dla Zalewu Zegrzyńskiego</h4>
          <div className={classes['weather-pack_section']}>{weatherZz}</div>
        </div>
        <div className={classes['weather-pack_sub_section']}>
          <h4>dla Wielkich Jezior Mazurskich</h4>
          <div className={classes['weather-pack_section']}>{weatherWjm}</div>
        </div>
        <div className={classes.converter}>
          <h4>konwerter jednostek prędkości wiatru <FaWind className={classes.icon}/></h4>
          <div className={classes['weather-pack_section']}>
            <Converter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherPack;
