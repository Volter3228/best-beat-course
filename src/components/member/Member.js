import React from 'react';
import './Member.css';

const Member = (props) => {
  const { name, position, photo, link } = props;

  return (
    <div className='member' style={{ backgroundImage: `url(${photo})` }}>
      <div className='member-position'>{position}</div>
      <div className='member-name'>{name}</div>
      <button className='member-button'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          Telegram
        </a>
      </button>
    </div>
  );
};

export default Member;
