import React from "react";

import { useTranslation } from "react-i18next";

import "./FirstSection.css";

const FirstSection = () => {
	const { t } = useTranslation("common");

	return (
		<div className="center first-section full-width">
			<h2 className="white-text text-bold title">{t("1.heading")}</h2>
			<div className="row flex justify-center">
				<div className="col s12 l10 m-0">
					<div className="row white-text text-bold">
						<div className="col s12 m4">
							<h6 className="subtitle">{t("1.when")}</h6>
							<button className="yellow-button">
								{t("1.when-btn")}
							</button>
						</div>
						<div className="col s12 m4">
							<h6 className="subtitle">{t("1.where")}</h6>
							<button className="yellow-button">
								{t("1.where-btn")}
							</button>
						</div>
						<div className="col s12 m4">
							<h6 className="subtitle">{t("1.orgs")}</h6>
							<button className="yellow-button">
								<a href="https://best-lviv.org.ua/">
									{t("1.orgs-btn")}
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
