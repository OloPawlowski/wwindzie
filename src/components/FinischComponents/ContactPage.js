import React from 'react';
import Template from '../UI/ProductTemplate/Template';
import Kontakt from '../Layout/Kontakt/Kontakt';
import BackDropImage from '../UI/BackDropImage/BackDropImage';
const ContactPage = () => {
  return (
    <React.Fragment>
      <Template name='Skontaktuj się z nami' product={<Kontakt />} />
      <BackDropImage />
    </React.Fragment>
  );
};
export default ContactPage;
