import React from "react";
import Member from "../../member/Member";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<div className="block footer">
			<img
				className="logo center"
				src="/images/logo-black.png"
				alt="logo"
			/>
			<h3 className="center">{t("9.heading")}</h3>
			<div className="social">
				<a href="https://www.instagram.com/best_lviv/">
					<img src="/images/icons/instagram.png" alt="instagram" />
				</a>
				<a href=" https://www.facebook.com/BEST.Lviv">
					<img src="/images/icons/facebook.png" alt="facebook" />
				</a>
				<a href="https://t.me/bestlviv">
					<img src="/images/icons/telegram.png" alt="telegram" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
