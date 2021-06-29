import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section3.css';

const Seciton3 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block plane section-3-block'>
      <div className='section-3-flex'>
        <div className='content'>
          <h3 className='highlight'>{t('3.heading')}</h3>
          <img
            className='section-3-small-image hide-on-large-only'
            src='images/dj.png'
            alt='dj'
          />
          <br />
          <p className='highlight'>{t('3.paragraph-1')}</p>
          <p>{t('3.paragraph-2')}</p>
          <br />
          <button className='yellow-button'>
            <a
              className='yellow-button-link'
              href='https://youtu.be/Yl1PC-sjxHk'
            >
              {t('3.video-btn')}
            </a>
          </button>
        </div>
        <div className='section-3-image hide-on-med-and-down'>
          <img src='images/dj.png' alt='dj' />
        </div>
      </div>
    </div>
  );
};

export default Seciton3;
