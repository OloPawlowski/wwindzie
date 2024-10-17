import React from 'react';
import Carousel from '../Layout/GeneralOverview/Carousel';
import Template from '../UI/ProductTemplate/Template';
import Training from '../Layout/Trainings/TrainingMain/Training';
import Mazury from '../Layout/Mazury/Mazury';
import InstructorCards from '../Layout/Instructors/InstructorCards';
import BackDropImage from '../UI/BackDropImage/BackDropImage';

const Home = (props) => {
  return (
    <React.Fragment>
      <Carousel />
      <Template name='Kursy żeglarskie' product={<Training />} />
      <Template name='Rejsy i szkolenia na Mazurach' product={<Mazury />} />
      <BackDropImage />
      <Template name='Instruktor żeglarstwa' product={<InstructorCards />} />
    </React.Fragment>
  );
};
export default Home;
