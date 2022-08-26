import React, {Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
//import BackgroundImage from './components/Layout/BackgroundImage/BackgroundImage';
import Header from './components/Layout/Head/Header';
import Carousel from './components/Layout/GeneralOverview/Carousel';
import Template from './components/UI/ProductTemplate/Template';
import Training from './components/Layout/Trainings/TrainingMain/Training';
import Mazury from './components/Layout/Mazury/Mazury';
import InstructorCards from './components/Layout/Instructors/InstructorCards';
import WeatherPack from './components/Layout/Weather/WeatherPack';
import Kontakt from './components/Layout/Kontakt/Kontakt';
import MazurySubPage from './components/Layout/Mazury/MazurySubPage';
import TrainingSubPage from './components/Layout/Trainings/TrainingSubPage/TrainingSubPage';
import Footer from './components/Footer/Footer';
import NavMobile from './components/Layout/Head/NavMobile/NavMobile';
import BackDropImage from './components/UI/BackDropImage/BackDropImage';
import Edu from './components/Layout/Edu/Edu';

const PAGES = [
  {
    name: 'Szkolenie żeglarskie',
    path: '/szkolenie',
    product: <Training />,
  },
  {
    name: 'Mazury',
    path: '/mazury',
    product: <Mazury />,
  },
  {
    name: 'Instruktor',
    path: '/instruktorzy',
    product: <InstructorCards />,
  },
  {
    name: 'Sprawdź prognozę pogody',
    path: '/pogoda',
    product: <WeatherPack />,
  },
  {
    name: 'Skontaktuj się z nami',
    path: '/kontakt',
    product: <Kontakt />,
  },
  {
    name: 'Rejsy turystyczne i szkoleniowe',
    path: '/rejsy-turystyczne-szkoleniowe-na-mazurach',
    product: <MazurySubPage />,
  },
  {
    name: 'Bądź świadomym żeglarzem',
    path: '/szkolenie',
    product: <TrainingSubPage />,
  },
  {
    name: 'Sprawdź swoją świadomość żeglarską',
    path: '/edukacja',
    product: <Edu />,
  },
];

const App = () => {

 const [navMobileIsShow, setNavMobileIsShow]  = useState(false);

const showNavMobile = () => {
   setNavMobileIsShow(true);
};
 const hideNavMobile = () => {
   setNavMobileIsShow(false); 
 }
 
  return (
    <Fragment>
      {!navMobileIsShow && <Header onShowMobileMenu={showNavMobile}/>}
      {navMobileIsShow && <NavMobile hideNavMenu={hideNavMobile}/> } 
      <main>
        <Suspense fallback={<p>ładuję...</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/wwindzie" />
          </Route>
          <Route path="/wwindzie">
            <Carousel />
            <Template name={PAGES[0].name} product={PAGES[0].product} />
            <Template name={PAGES[1].name} product={PAGES[1].product} />
            <BackDropImage />
            <Template name={PAGES[2].name} product={PAGES[2].product} />
          </Route>
          <Route path={PAGES[3].path}>
            <Template name={PAGES[3].name} product={PAGES[3].product} />
            <BackDropImage />
          </Route>
          <Route path={PAGES[4].path}>
            <Template name={PAGES[4].name} product={PAGES[4].product} />
            <BackDropImage />
          </Route>
          <Route path={PAGES[5].path}>
            <Template name={PAGES[5].name} product={PAGES[5].product} />            
            <BackDropImage />
          </Route>
          <Route path={PAGES[6].path}>
            <Template name={PAGES[6].name} product={PAGES[6].product} />            
          </Route>
          <Route path={PAGES[7].path}>
            <Template name={PAGES[7].name} product={PAGES[7].product} />            
          </Route>
        </Switch>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}
export default App;
