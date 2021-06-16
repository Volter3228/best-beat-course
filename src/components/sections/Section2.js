import React from 'react';
import { useTranslation } from 'react-i18next';

const Seciton2 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block plane'>
      <button className='yellow-button'>{t('2.action-btn')}</button>
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
  );
};

export default Seciton2;
