import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import ContactForm from './ContactForm';
import classes from './Kontakt.module.css';

const Kontakt = () => {
  return (
    <article className={classes.article}>
      <div className={classes.card}>
        <h4>zadzwoń:</h4>
        <p className={classes.contact}>
          <a className={classes.link} href="tel:+48515802897">
            <FaPhoneAlt className={classes.iconP} />
          </a>
          515 802 897
        </p>
        <ContactForm />
        <h4>lub napisz na:</h4>
        <p className={classes.contact}>
          <GrMail className={classes.icon} /> alekpawlowski@gmail.com
        </p>
        <h4>adres:</h4>
        <p>Agencja Żeglarska "W Windzie" Aleksander Pawłowski</p>
        <p>ul. Obrońców Tobruku 38/133</p>
        <p>01-494 Warszawa</p>
        <p>NIP 757 117 60 90</p>
      </div>
    </article>
  );
};
export default Kontakt;
