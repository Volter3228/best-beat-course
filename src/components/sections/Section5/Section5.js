import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section5.css';

const Section5 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block'>
      <h3 className='center'>{t('5.heading')}</h3>
      <p className='center'>{t('5.sub-heading')}</p>

      <div className='section-5-flex'>
        <div className='section-5-point center'>
          <img src='images/icons/house.svg' alt='house'></img>
          <div className='section-5-text'>{t('5.point-1')}</div>
        </div>

        <div className='section-5-point center'>
          <img src='images/icons/train.svg' alt='train'></img>
          <div className='section-5-text'>{t('5.point-2')}</div>
        </div>

        <div className='section-5-point center'>
          <img src='images/icons/food.svg' alt='food'></img>
          <div className='section-5-text'>{t('5.point-3')}</div>
        </div>

        <div className='section-5-point center'>
          <img src='images/icons/lamp.svg' alt='lamp'></img>
          <div className='section-5-text'>{t('5.point-4')}</div>
        </div>

        <div className='section-5-point center'>
          <img src='images/icons/mountains.svg' alt='mountains'></img>
          <div className='section-5-text'>{t('5.point-5')}</div>
        </div>
      </div>
      <div className='row center-align'>
        <button className='yellow-button' style={{ marginRight: '1rem' }}>
          <a className='yellow-button-link' href='images/schedule.png'>
            {t('5.schedule')}
          </a>
        </button>
        <button className='yellow-button'>
          <a
            className='yellow-button-link'
            href='https://forms.gle/pmBMcmZeqVt2Fok66'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'white' }}
          >
            {t('navbar.apply-btn')}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Section5;
