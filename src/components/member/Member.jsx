import React from "react";
// import { useTranslation } from 'react-i18next';
import "./Member.css";

const Member = (props) => {
	//   const { t } = useTranslation('common');
    const {name, position, photo, link} = props

	return (
		<div className="member" style={{backgroundImage: `url(${photo})`}}>
			<div className="member-position">{position}</div>
			<div className="member-name">{name}</div>
            <button className="member-button">
                <a href="/#">Telegram</a>
            </button>
		</div>
	);
};

export default Member;
