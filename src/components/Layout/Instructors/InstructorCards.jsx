import React from 'react';
import oloImage from '../../../assets/Agencja-zeglarska-W-Windzie-Aleksander-Pawlowski.webp';
import InstructorCard from './InstructorCard';
import classes from './InstructorCards.module.css';

const INSTRUCTORS = [  
  {
    id: "1",
    name: 'Aleksander Olo Pawłowski',
    photo: oloImage,
    photoAlt: 'Aleksander Pawłowski instruktor żeglarstwa',
    licence1: 'Instruktor Żeglarstwa IŻ PZŻ',
    licence2: 'Jachtowy Sternik Morski',
    licence3: 'Motorowodny Sternik Morski',
    description: '',
  }  
];

const InstructorCards = () => {
  const instructors = INSTRUCTORS.map((ins) => (
    <InstructorCard
      key={ins.id}
      name={ins.name}
      photo={ins.photo}
      photoAlt={ins.photoAlt}
      licence1={ins.licence1}
      licence2={ins.licence2}
      licence3={ins.licence3}
      description={ins
        .description}
    />
  ));
  return <div className={classes.instructors}>{instructors}</div>;
};
export default InstructorCards;
