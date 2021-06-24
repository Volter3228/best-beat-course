import React from "react";
import Member from "../../member/Member";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<div className="block footer">
            <img src="/images/Logo.png" alt="logo" />
            <h3>{t('9.heading')}</h3>
		</div>
	);
};

export default Footer;
