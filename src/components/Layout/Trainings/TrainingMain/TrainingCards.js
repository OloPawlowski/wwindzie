import TrainingCard from './TrainingCard';
import patentImage from '../../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-nauka-zeglarstwa-1.webp';
import abcImage from '../../../../assets/Agencja-zeglarska-w-windzie-Aleksander-Pawlowski-sternik-mazury-1.webp';
import doszkalanieImage from '../../../../assets/Agencja-zeglarska-w-windzie-doszkalanie-1.webp';
import classes from './TrainingCards.module.css';

const TRAININGS = [
  {
    id: '1',
    name: 'Indywidualny kurs na patent Żeglarza Jachtowego',
    img: patentImage,
    alt: 'woda lekko zafalowana',
    link: '/szkolenie-zeglarskie',
  },
  {
    id: '2',
    name: 'Żeglarskie abc',
    img: abcImage,
    alt: 'widok z jachtu na mały port',
    link: '/szkolenie-zeglarskie',
  },
  {
    id: '3',
    name: 'Doszkalanie',
    img: doszkalanieImage,
    alt: 'widok z przechylonego jachtu',
    link: '/szkolenie-zeglarskie',
  },
];

const TrainingCards = () => {
  const trainingItems = TRAININGS.map((tr) => (
    <TrainingCard
      key={tr.id}
      name={tr.name}
      img={tr.img}
      alt={tr.alt}
      link={tr.link}
    />
  ));
  return <div className={classes.cards}>{trainingItems}</div>;
};
export default TrainingCards;
