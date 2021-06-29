import React from 'react';

import { useTranslation } from 'react-i18next';

import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation('common');

  const handleChangeLang = () => {
    const currLang = i18n.language;
    i18n.changeLanguage(currLang === 'en' ? 'ua' : 'en');
  };

  return (
    <nav className='transparent z-depth-0' style={{ marginBottom: '5rem' }}>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo' style={{ left: '4rem' }}>
          <img alt='logo' src='images/Logo.png' />
        </a>
        <ul id='nav-mobile' className='right'>
          <li className='hide-on-small-only'>
            <a
              className='waves-effect waves-teal btn-flat white-text'
              href='https://www.instagram.com/best_lviv/'
              rel='noreferrer'
              target='_blank'
            >
              {t('navbar.contact-us')}
            </a>
          </li>
          <li>
            <div
              className='waves-effect waves-teal btn-flat white-text change-lang'
              onClick={handleChangeLang}
            >
              {i18n.language}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
