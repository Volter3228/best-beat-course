import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section2.css';

const Seciton2 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block plane section-2'>
      <div className='logobutton'>
        <img
          className='logo'
          src='images/best-logo-white.png'
          alt='best lviv'
        />
        <button className='yellow-button'>
          <a href='https://best-lviv.org.ua/'>{t('2.action-btn')}</a>
        </button>
      </div>
      <div>
        <p className='highlight'>
          <b>{t('2.paragraph-1.em')}</b>
          {t('2.paragraph-1.text')}
        </p>
        <p>
          <b>{t('2.paragraph-2.em')}</b>
          {t('2.paragraph-2.text')}
        </p>
        <p>
          <b>{t('2.paragraph-3.em')}</b>
          {t('2.paragraph-3.text')}
        </p>
      </div>
    </div>
  );
};

export default Seciton2;
