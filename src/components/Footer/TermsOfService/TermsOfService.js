import React from "react";
import "./TermsOfService.css";
import { useTranslation } from "react-i18next";
import { IconDown } from "../../../assets/image/svg";

const TermsOfService = () => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const container = document.getElementById("terms-of-service__container");
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="terms-of-service__title">
        <span className="terms-of-service__title_text">
          {t('termsOfService.title')}
          <br /> <span />
          {t('termsOfService.company')}
        </span>
        <div className="terms-of-service__title_button">
          <button
            onClick={handleScroll}
            className="terms-of-service__title_button_btn"
          >
            {t('termsOfService.learnMoreButton', 'Learn More')}
          </button>
          <span>
            <IconDown />
          </span>
        </div>
      </div>
      <div
        className="terms-of-service__container"
        id="terms-of-service__container"
      >
        <div className="terms-of-service__content">
          <h1>{t('termsOfService.title')} {t('termsOfService.company')}</h1>
          <p className="update-date">
            <strong>{t('termsOfService.content.updated')}</strong>
          </p>
          <p>
            <strong>{t('termsOfService.content.introduction.content')}</strong>
          </p>

          <h2>{t('termsOfService.content.introduction.title')}</h2>
          <p>{t('termsOfService.content.introduction.content')}</p>

          <h2>{t('termsOfService.content.termPaymentModification.title')}</h2>
          <p>{t('termsOfService.content.termPaymentModification.content')}</p>

          <h2>{t('termsOfService.content.paymentMethod.title')}</h2>
          <p>{t('termsOfService.content.paymentMethod.content')}</p>

          <h2>{t('termsOfService.content.refundCancellationPolicy.title')}</h2>
          <p>{t('termsOfService.content.refundCancellationPolicy.content')}</p>

          <h2>{t('termsOfService.content.servicesProvided.title')}</h2>
          <p>{t('termsOfService.content.servicesProvided.content')}</p>

          <h2>{t('termsOfService.content.nonCustomerAssetOwnership.title')}</h2>
          <p>{t('termsOfService.content.nonCustomerAssetOwnership.content')}</p>

          <h2>{t('termsOfService.content.noLicense.title')}</h2>
          <p>{t('termsOfService.content.noLicense.content')}</p>

          <h2>{t('termsOfService.content.confidentialInformation.title')}</h2>
          <p>{t('termsOfService.content.confidentialInformation.content')}</p>

          <h2>{t('termsOfService.content.restrictions.title')}</h2>
          <p>{t('termsOfService.content.restrictions.content')}</p>

          <h2>{t('termsOfService.content.customerCommitments.title')}</h2>
          <p>{t('termsOfService.content.customerCommitments.content')}</p>

          <h2>{t('termsOfService.content.customerIndemnity.title')}</h2>
          <p>{t('termsOfService.content.customerIndemnity.content')}</p>

          <h2>{t('termsOfService.content.liabilityLimitation.title')}</h2>
          <p>{t('termsOfService.content.liabilityLimitation.content')}</p>

          <h2>{t('termsOfService.content.heirsAssignees.title')}</h2>
          <p>{t('termsOfService.content.heirsAssignees.content')}</p>

          <h2>{t('termsOfService.content.choiceOfLaw.title')}</h2>
          <p>{t('termsOfService.content.choiceOfLaw.content')}</p>

          <h2>{t('termsOfService.content.headings.title')}</h2>
          <p>{t('termsOfService.content.headings.content')}</p>

          <h2>{t('termsOfService.content.waiver.title')}</h2>
          <p>{t('termsOfService.content.waiver.content')}</p>

          <h2>{t('termsOfService.content.entireAgreement.title')}</h2>
          <p>{t('termsOfService.content.entireAgreement.content')}</p>

          <h2>{t('termsOfService.content.attorneyFees.title')}</h2>
          <p>{t('termsOfService.content.attorneyFees.content')}</p>

          <h2>{t('termsOfService.content.noThirdPartyBenefits.title')}</h2>
          <p>{t('termsOfService.content.noThirdPartyBenefits.content')}</p>

          <h2>{t('termsOfService.content.survival.title')}</h2>
          <p>{t('termsOfService.content.survival.content')}</p>

          <h2>{t('termsOfService.content.execution.title')}</h2>
          <p>{t('termsOfService.content.execution.content')}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
