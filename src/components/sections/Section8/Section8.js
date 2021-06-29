import React from 'react';
import Member from '../../member/Member';
import { useTranslation } from 'react-i18next';
import './Section8.css';

const Section8 = () => {
  const { t } = useTranslation('common');

  return (
    <div className='section-8'>
      <h3 className='center'>{t('8.heading')}</h3>

      <div className='team-grid'>
        <Member
          photo='/images/team/olenka.png'
          name={t('8.member-1.name')}
          position={t('8.member-1.position')}
          link='https://t.me/olenka_levchyshyn'
        />
        <Member
          photo='/images/team/sasha.png'
          name={t('8.member-2.name')}
          position={t('8.member-2.position')}
          link='https://t.me/alxkrlv'
        />
        <Member
          photo='/images/team/yooliak.png'
          name={t('8.member-3.name')}
          position={t('8.member-3.position')}
          link='https://t.me/i_yulya'
        />
        <Member
          photo='/images/team/sophia.png'
          name={t('8.member-4.name')}
          position={t('8.member-4.position')}
          link='https://t.me/Sofkolyk'
        />
        <Member
          photo='/images/team/yooliaz.png'
          name={t('8.member-5.name')}
          position={t('8.member-5.position')}
          link='https://t.me/YuliiaZadorozhna'
        />
        <Member
          photo='/images/team/misha.png'
          name={t('8.member-6.name')}
          position={t('8.member-6.position')}
          link='https://t.me/mkaminskyi'
        />
        <Member
          photo='/images/team/ira.png'
          name={t('8.member-7.name')}
          position={t('8.member-7.position')}
          link='https://t.me/irynakozak21'
        />
        <Member
          photo='/images/team/nestor.png'
          name={t('8.member-8.name')}
          position={t('8.member-8.position')}
          link='https://t.me/s0nchoz'
        />
        <Member
          photo='/images/team/ooliana.png'
          name={t('8.member-9.name')}
          position={t('8.member-9.position')}
          link='https://t.me/Uliana_Panius'
        />
        <Member
          photo='/images/team/katya.png'
          name={t('8.member-10.name')}
          position={t('8.member-10.position')}
          link='https://t.me/katekrava'
        />
      </div>
    </div>
  );
};

export default Section8;
