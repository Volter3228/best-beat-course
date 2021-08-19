import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section7.css';

const COMPANY_IMAGES = [
  'Chipsters.png', 'TryVedmedi.jpg', 'LavashChef.jpg', 'Hit24.png', 
  'Bun&Cat.png', 'DobraVoda.jpg', 'DobriiVechir.png' , 'BigBon.png'
];

const Section7 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block'>
      <h3 className='center'>{t('7.heading')}</h3>
      <div className='valign-wrapper'>
        <div className='row' style={{ position: 'relative' }}>
          { COMPANY_IMAGES.map(companyImage => 
            <div className='col s12 m4 l4 valign-wrapper image-block'>
              <img
                className='company-image'
                src={`images/companies/${companyImage}`}
                alt={companyImage.substr(0, companyImage.indexOf('.'))}
              />
            </div>
          )}
          <div className='col s12 m4 l4 valign-wrapper image-block'>
              <img
                style={{ width: '40%' }}
                src='images/companies/DodoSocks.png'
                alt='DodoSocks'
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
