import React from 'react';

import { useTranslation } from 'react-i18next';

import './HeaderSection.css';

const HeaderSection = () => {
  const { t } = useTranslation('common');

  return (
    <div className='center first-section'>
      <h2 className='white-text text-bold title'>{t('navbar.course-name')}</h2>
      <button className='apply-btn white-text cursor-pointer'>
        {t('navbar.apply-btn')}
      </button>
    </div>
  );
};

export default HeaderSection;
