import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section7.css';

const Section7 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block'>
      <h3 className='center'>{t('7.heading')}</h3>
    </div>
  );
};

export default Section7;
