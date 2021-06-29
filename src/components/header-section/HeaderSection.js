import React from 'react';

import { useTranslation } from 'react-i18next';

import './HeaderSection.css';

const HeaderSection = () => {
  const { t } = useTranslation('common');

  return (
    <div className='center first-section'>
      <h2 className='white-text text-bold title'>{t('navbar.course-name')}</h2>
      <button className='apply-btn white-text cursor-pointer'>
        <a
          href='https://forms.gle/pmBMcmZeqVt2Fok66'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'white' }}
        >
          {t('navbar.apply-btn')}
        </a>
      </button>
    </div>
  );
};

export default HeaderSection;
