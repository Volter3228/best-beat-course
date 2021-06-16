import React from 'react';
import { useTranslation } from 'react-i18next';

const Seciton3 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block plane'>
      <h3 className='highlight'>{t('3.heading')}</h3>
      <p className='highlight'>{t('3.paragraph-1')}</p>
      <p>{t('3.paragraph-2')}</p>
      <button className='yellow-button'>
        <a
          className='yellow-button-link'
          href='https://drive.google.com/file/d/1k4LN2VO63ruFFYR4O2bV7lOiCBD9Xcf4/view?usp=sharing'
        >
          {t('3.video-btn')}
        </a>
      </button>
    </div>
  );
};

export default Seciton3;
