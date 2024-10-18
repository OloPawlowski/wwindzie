import sterniczkaImage from '../../../../assets/sterniczka.webp';
import sternikImage from '../../../../assets/IMG_5501.webp';
import jachtImage from '../../../../assets/Agencja-zeglarska-W-windzie-w-przechyleniu.webp';
import classes from './TrainingSubPage.module.css';
import TrainingSubPageCard from './TrainingSubPageCard';

const CARDCONTENT = [
  {
    title: 'Mini kurs żeglarskie abc',
    subtitle:
      'dla tych, którzy chcą nauczyć się podstaw żeglarstwa i pływać jachtami do prowadzenia których nie są wymagane uprawnienia.',
    content:
      "Jeśli chcesz spróbować żeglarstwa, nie wiesz czy drzemie w tobie potencjał 'skippera', masz obawy i brak ci przekonania albo wybierasz się na rejs, na którym będziesz płynął w charakterze członka załogi i chcesz wiedzieć jak zachowywać się na jachcie, umieć wykonać polecenia sternika to zapraszamy na podstawowe szkolenie wprowadzające w arkana żeglarstwa. Do udziału w nim zachęcamy też wszystkich tych, którzy chcą po prostu nauczyć się podstaw żeglarstwa i pływać jachtami do prowadzenia których nie są wymagane uprawnienia.",
    image: sternikImage,
  },
  {
    title: 'Indywidualny kurs na patent Żeglarza Jachtowego',
    subtitle:
      'dla tych którzy chcą zdobywać stopnie i państwowe patenty żeglarskie.',
    content:
      'w pełni realizuje program Polskiego Związku Żeglarskiego w zakresie wiedzy teoretycznej i praktycznych umiejętności żeglarskich wymagany na tym poziomie uprawnień.',
    image: jachtImage,
  },
  {
    title: 'Doszkalanie',
    subtitle: 'dla tych, którzy już umieją, ale chcą więcej i lepiej',
    content:
      'Szkolenie uzupełniające podnoszące poziom i zakres umiejętności żeglarskich dedykowane jest żeglarzom, którzy dawno nie pływali, są świeżo upieczonymi sternikami oraz wszystkim tym, którzy chcą przypomnieć sobie jak się żegluje, poćwiczyć wybrane manewry, warianty manewrów lub takie których nie było na kursie.',
    image: sterniczkaImage,
  },
];

const TrainingSubPage = () => {
  const card = CARDCONTENT.map((card) => (
    <TrainingSubPageCard
      key={card.title}
      title={card.title}
      subtitle={card.subtitle}
      content={card.content}
      image={card.image}
    />
  )); 
  
  return (
    <div className={classes['sub-page-container']}>
      <article className={classes['introduction-container']}>
        <div className={classes.introduction}>
          Proponujemy Ci indywidualne szkolenie żeglarskie, dostosowane do
          Twoich terminów, możliwości, predyspozycji i preferencji.<br/ > Możesz uczyć
          się sam, z przyjaciółmi lub z rodziną. Wspólnie dobierzemy zakres
          materiału i terminy zajęć w zależności od waszych potrzeb.<br/ > Celem jest
          to żebyś po szkoleniu mógł samodzielnie, bezpiecznie i pewnie
          prowadzić jacht i bez obaw zabrać na własny rejs rodzinę i znajomych.
        </div>
      </article>
      <div className={classes.articles}>{card}</div>
    </div>
  );
};
export default TrainingSubPage;