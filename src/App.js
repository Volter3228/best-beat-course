import React from 'react';

import Navbar from './components/navbar/Navbar';
import HeaderSection from './components/header-section/HeaderSection';
import FirstSection from './components/sections/first/FirstSection';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3/Section3';
import Section4 from './components/sections/Section4/Section4';
import Section5 from './components/sections/Section5/Section5';
import Section6 from './components/sections/Section6/Section6';
import Section7 from './components/sections/Section7/Section7';
import Section8 from './components/sections/Section8/Section8';
import Footer from './components/sections/Footer/Footer';

import 'normalize-css';
import './App.css';

const App = () => {
  return (
    <div className='App full-width'>
      <section className='header-background'>
        <Navbar />
        <HeaderSection />
        <svg
          className='wave'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#673EDB'
            fill-opacity='1'
            d='M0,0L80,48C160,96,320,192,480,208C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          />
        </svg>
        <div className='spread-background' />
      </section>
      <section className='gradient'>
        <FirstSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
      </section>
    </div>
  );
};

export default App;
