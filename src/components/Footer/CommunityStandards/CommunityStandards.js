import React from "react";
import { useTranslation } from "react-i18next";
import "./CommunityStandards.css";
import { IconDown } from "../../../assets/image/svg";

const CommunityStandards = () => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const container = document.getElementById("community_standards__container");
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="community_standards">
      <div className="community_standards__title">
        <span className="community_standards__title_text">
          {t("communityStandards.title")} <br />
          <span />
          {t("communityStandards.company")}
        </span>
        <div className="community_standards__title_button">
          <button onClick={handleScroll} className="community_standards__title_button_btn">
            {t("communityStandards.learnMore", "Learn More")}
          </button>
          <span>
            <IconDown />
          </span>
        </div>
      </div>
      <div className="community_standards__container" id="community_standards__container">
        <div className="community_standards__content">
          <h1>{t("communityStandards.title")} {t("communityStandards.company")}</h1>
          <p className="date-updated">
            <strong>{t("communityStandards.updated")}</strong>
          </p>
          <p className="date-effective">
            <strong>{t("communityStandards.effectiveDate")}</strong>
          </p>
          <p>{t("communityStandards.welcomeMessage")}</p>

          <h2>{t("communityStandards.values.title")}</h2>
          <p>{t("communityStandards.values.description")}</p>
          <ul>
            {t("communityStandards.values.items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("communityStandards.lawCompliance.title")}</h2>
          <p>{t("communityStandards.lawCompliance.description")}</p>
          <ul>
            {t("communityStandards.lawCompliance.items", { returnObjects: true }).map((item, index) =>
              item.main ? (
                <li key={index} className="content__21">
                  {item.main}
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <h2>{t("communityStandards.communication.title")}</h2>
          <p>{t("communityStandards.communication.description")}</p>
          <ul>
            {t("communityStandards.communication.items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("communityStandards.minorProtection.title")}</h2>
          <p>{t("communityStandards.minorProtection.description")}</p>
          <ul>
            {t("communityStandards.minorProtection.items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("communityStandards.fraudAndSpam.title")}</h2>
          <p>{t("communityStandards.fraudAndSpam.description")}</p>
          <ul>
            {t("communityStandards.fraudAndSpam.items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("communityStandards.violationHandling.title")}</h2>
          <p>{t("communityStandards.violationHandling.description")}</p>
          <ul>
            {t("communityStandards.violationHandling.items", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("communityStandards.complaints.title")}</h2>
          <p>{t("communityStandards.complaints.description")}</p>

          <h2>{t("communityStandards.supportContact.title")}</h2>
          <p>{t("communityStandards.supportContact.description")}</p>

          <p>{t("communityStandards.closing")}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityStandards;
