import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section4.css';

const Section4 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block plane'>
      <h3 className='center section-4-heading'>{t('4.heading')}</h3>

      <div className='section-4-grid'>
        <div className='section-4-point center'>
          <div className='highlight big-number'>{t('4.point-1.number')}</div>
          <div className='highlight section-4-point-name'>
            {t('4.point-1.name')}
          </div>
          <div className='section-4-text'>{t('4.point-1.text')}</div>
        </div>

        <div className='section-4-point center'>
          <div className='highlight big-number'>{t('4.point-2.number')}</div>
          <div className='highlight section-4-point-name'>
            {t('4.point-2.name')}
          </div>

          <div className='section-4-text'>{t('4.point-2.text')}</div>
        </div>

        <div className='section-4-point center'>
          <div className='highlight big-number'>{t('4.point-3.number')}</div>
          <div className='highlight section-4-point-name'>
            {t('4.point-3.name')}
          </div>
          <div className='section-4-text'>{t('4.point-3.text')}</div>
        </div>

        <div className='section-4-point center'>
          <img src='images/icons/train.svg' alt='train'></img>
          <div className='section-4-text'>{t('4.point-4.text')}</div>
        </div>

        <div className='section-4-point center'>
          <img src='images/icons/note.svg' alt='notes'></img>
          <div className='section-4-text'>{t('4.point-5.text')}</div>
        </div>

        <div className='section-4-point center'>
          <img src='images/icons/lion.svg' alt='lion'></img>
          <div className='section-4-text'>{t('4.point-6.text')}</div>
        </div>
      </div>

      <div className='center section-4-text'>{t('4.paragraph-1')}</div>
      <div
        className='center violet-text section-4-text'
        style={{ paddingTop: 0, marginTop: '-0.5rem' }}
      >
        {t('4.paragraph-2')}
      </div>
    </div>
  );
};

export default Section4;
