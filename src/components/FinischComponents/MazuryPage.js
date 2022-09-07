import React from 'react';
import Template from '../UI/ProductTemplate/Template';
import MazurySubPage from '../Layout/Mazury/MazurySubPage';
import BackDropImage from '../UI/BackDropImage/BackDropImage';

const MazuryPage = (props) => {
  return (
    <React.Fragment>
      <Template name='Rejsy turystyczne i szkoleniowe' product={<MazurySubPage />} />
      <BackDropImage />
    </React.Fragment>
  );
};
export default MazuryPage;
