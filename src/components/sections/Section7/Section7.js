import React from 'react';
import { useTranslation } from 'react-i18next';
import './Section7.css';

const Section7 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='block'>
      <h3 className='center'>{t('7.heading')}</h3>
      <div className='valign-wrapper'>
        <div className='row' style={{ position: 'relative' }}>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/BigBon.png'
              alt='bigbon'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/PervomaiskKombinat.png'
              alt='pervomaiskiykombinat'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/Levada.png'
              alt='levada'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/GWater.png'
              alt='GWater'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/buncatshop.jpg'
              alt='buncatshop'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/FoodStyle.jpg'
              alt='FoodStyle'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/ChudoTur.jpg'
              alt='pervomaiskiykombinat'
            />
          </div>

          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/Ligos.png'
              alt='ligos'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/DobriiVechir.png'
              alt='dobriivechir'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/Vyshyvanka.jpg'
              alt='vyshyvanka'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/LittleGreen.png'
              alt='littleGreen'
            />
          </div>
          <div className='col s12 m4 l3 valign-wrapper image-block'>
            <img
              className='full-width'
              src='images/companies/Hit24.png'
              alt='hit24'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
