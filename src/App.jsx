import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import { useState } from 'react';
import Header from './components/Layout/Head/Header';
import Home from './components/FinischComponents/Home';
import MazuryPage from './components/FinischComponents/MazuryPage';
import WeatherPage from './components/FinischComponents/WeatherPage';
import ContactPage from './components/FinischComponents/ContactPage';
import Template from './components/UI/ProductTemplate/Template';
import TrainingSubPage from './components/Layout/Trainings/TrainingSubPage/TrainingSubPage';
import Edu from './components/Layout/Edu/Edu';
import Footer from './components/Footer/Footer';
import NavMobile from './components/Layout/Head/NavMobile/NavMobile';
const App = () => {
  const [navMobileIsShow, setNavMobileIsShow] = useState(false);

  const showNavMobile = () => {
    setNavMobileIsShow(true);
  };
  const hideNavMobile = () => {
    setNavMobileIsShow(false);
  };

  return (
    <Fragment>
      {!navMobileIsShow && <Header onShowMobileMenu={showNavMobile} />}
      {navMobileIsShow && <NavMobile hideNavMenu={hideNavMobile} />}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/agencja-zeglarska-w-windzie" />} />
          <Route path="/agencja-zeglarska-w-windzie" element={<Home />} />
          <Route
            path="/szkolenie-zeglarskie"
            element={
              <Template
                name="Bądź świadomym żeglarzem"
                product={<TrainingSubPage />}
              />
            }
          />
          <Route
            path="/rejsy-turystyczne-szkoleniowe-na-mazurach"
            element={<MazuryPage />}
          />
          <Route path="/zeglarska-prognoza-pogody" element={<WeatherPage />} />
          <Route path="/kontakt-Aleksander-Pawlowski" element={<ContactPage />} />
          <Route
            path="/edukacja-zeglarska"
            element={
              <Template
                name="Sprawdź swoją świadomość żeglarską"
                product={<Edu />}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};
export default App;
