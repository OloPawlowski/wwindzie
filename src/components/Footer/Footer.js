import { FaFacebook } from 'react-icons/fa';
//import { FaFacebookMessenger } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
//import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import SocialMedia from './SocialMedia';
import classes from './Footer.module.css';

const SOCIALMEDIALOGOS = [
  {
    id: 'facebook',
    logo: <FaFacebook className={classes['facebook-icon']} />,
    link: 'https://www.facebook.com/www.wwindzie/',
  },
  //  {
  //    key: 'messenger',
  //    logo: <FaFacebookMessenger className={classes['messenger-icon']}/> ,
  //    link: '',
  //  },
  {
    id: 'youtube',
    logo: <FaYoutube className={classes['youtube-icon']} />,
    link: '',
  },
  //  {
  //    key: 'instagram',
  //    logo: <FaInstagramSquare className={classes['instagram-icon']}/>,
  //    link: '',
  //  },
  {
    id: 'twitter',
    logo: <FaTwitterSquare className={classes['twitter-icon']} />,
    link: '',
  },
];

const Footer = () => {
  const socialMediaIcons = SOCIALMEDIALOGOS.map((medium) => (
    <SocialMedia key={medium.id} logo={medium.logo} link={medium.link} />
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <ul className={classes['media-items']}>{socialMediaIcons}</ul>
      </div>
      <hr />
      <div className={classes.content}>
        <p>
          <FaRegCopyright className={classes.icon} /> 2014-2023 Agencja
          Żeglarska "W Windzie"
          <br />
          Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
