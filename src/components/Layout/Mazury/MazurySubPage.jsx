import ogniskoImage from '../../../assets/Agencja-zeglarska-W-windzie Aleksander-Pawlowski-ognisko.webp';
import przechylImage from '../../../assets/Agencja-zeglarska-W-windzie-w-przechyle.webp';
import classes from './MazurySubPage.module.css';

const TOPACK = [
"dokumenty", "pieniądze","leki","śpiwór","ręcznik","kosmetyczka","majtki","skarpetki","koszulki","polar","sztormiak góra i dół","spodnie długie i krótkie","buty na jacht i w teren","czapki","okulary","rękawiczki","latarka","nóż","gitara","kamera"
];

const MazurySubPage = () => {
  const toPackItem = TOPACK.map(item => (<li key={item}>{item}</li>))
  return (
    <div className={classes.container}>
      <article className={classes.article}>
        <div className={classes['sub-article_content']}>
            <p>
                Mazury, a dla nas ściślej Kraina Wielkich Jezior Mazurskich to kompleks kilkunastu jezior<br/>połączonych systemem kanałów, położony na unikalnym obszarze pod względem walorów przyrodniczych,<br/> który stanowi wyjątkowy, śródlądowy szlak żeglugowy w Europie. To piękne miejsce do odpoczynku<br/> i świetne do uprawiania żeglarstwa.<br />Organizujemy tam rejsy:<br /> szkoleniowe i turystyczne.<br /> Weekendowe i kilkunastodniowe. <br />Intensywne i na zupełnym luzie.<br /> Jeśli chcesz pożeglować po Wielkich Jeziorach Mazurskich to z nami na pewno nie będziesz tego żałować.<br/>Znamy tam każdy zakątek i wszystkie miejsca do których warto popłynąć,<br/> a wieczorem gwarantujemy wspaniałą zabawę przy ognisku ze śpiewem, z gitarą lub w tawernach portowych, kameralnie lub w towarzystwie wielu żeglarzy.
            </p>
        </div>
        <div className={classes['sub-article_image']}>
            <img src={przechylImage} alt="dużo ludzi przy ognisku z gitarą w nocy"/>
        </div>
      </article>
      <article className={classes.article}>
        <div className={classes['sub-article_list__image']}>
            <img src={ogniskoImage} alt="dużo ludzi przy ognisku z gitarą w nocy"/>
        </div>
        <div className={classes['sub-article_list']}>
          <h3>Co zabrać na rejs:</h3>
            <ul>
              {toPackItem}
            </ul>
        </div>
      </article>
    </div>
  );
};
export default MazurySubPage;
