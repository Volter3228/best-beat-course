import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section6.css';

const Section6 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block'>
      <h3 className='center'>{t('6.heading')}</h3>
      <p className='center highlight'>{t('6.sub-heading')}</p>

      <div className='section-6-flex'>
        <div className='feedbacks'>
          <div className='feedback'>
            <p className='highlight'>{t('6.feedback-1.location')}</p>
            <p>{t('6.feedback-1.text')}</p>
          </div>

          <img
            className='hide-on-large-only'
            src='images/photo-sc2019-1.png'
            alt='sc-2019-1'
          />

          <div className='feedback'>
            <p className='highlight'>{t('6.feedback-2.location')}</p>
            <p>{t('6.feedback-2.text')}</p>
          </div>

          <div className='feedback'>
            <p className='highlight'>{t('6.feedback-3.location')}</p>
            <p>{t('6.feedback-3.text')}</p>
          </div>

          <img
            className='hide-on-large-only'
            src='images/photo-sc2019-2.png'
            alt='sc-2019-2'
          />

          <div className='feedback'>
            <p className='highlight'>{t('6.feedback-4.location')}</p>
            <p>{t('6.feedback-4.text')}</p>
          </div>
        </div>

        <div className='images hide-on-med-and-down'>
          <img src='images/photo-sc2019-1.png' alt='sc-2019-1' />
          <img
            src='images/photo-sc2019-2.png'
            alt='sc-2019-2'
            style={{ marginLeft: '3.4rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
