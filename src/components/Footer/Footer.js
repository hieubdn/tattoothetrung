import React from 'react';
import { useTranslation } from 'react-i18next';
import { Address, EmailChat, IconFacebook, IconInstagram, IconTiktok, IconZalo, Telephone } from '../../assets/image/svg';
import './Footer.css';

const Footer = ({ addTestimonial }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Thông tin */}
        <div className="footer__info">
          <span className="footer__logo__text">T҉a҉t҉t҉o҉ T҉h҉ế T҉r҉u҉n҉g҉</span>
          <span className='footer_text'><span><Address /></span> {t('footer.address')}</span>
          <span className='footer_text'><span><Telephone /></span> {t('footer.phone')}</span>
          <span className='footer_text'><span><EmailChat /></span> {t('footer.email')}: lienhe@tiemxam.com</span>

          <div className='footer__social'>
            <a href="https://www.facebook.com/" className='footer__icon_hover'><span><IconInstagram /></span></a>
            <a href='https://www.facebook.com/profile.php?id=100076736794297' className='footer__icon_hover'><span><IconFacebook /></span></a>
            <span className='footer__icon footer__icon_hover'><IconZalo /></span>
            <span className='footer__icon footer__icon_hover'><IconTiktok /></span>
          </div>

          <div className='footer__communityStandards'>
            <span className='footer__communityStandards_text1'>{t('footer.support')}</span>
            <a href='/terms-of-service'><span className='footer__communityStandards_text2'>{t('footer.terms')}</span></a>
            <a href='/community-standards'><span className='footer__communityStandards_text2'>{t('footer.community_standards')}</span></a>
          </div>
        </div>

        {/* Bản đồ */}
        <div className="footer__map">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4673.618301182052!2d109.21729349239465!3d13.763381228074493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6d76edae6e95%3A0x24d950ad5fc9a647!2zWMSDbSBow6xuaCBDEkeG6uXAgUXV5IE5oxqFuLSBUYXR0b28gSHXhu7NuaCBQaMO6!5e0!3m2!1svi!2s!4v1730109533676!5m2!1svi!2s"
              className='google__map'
              title="Google Maps location of Tattoo Thế Trung"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className='footer__end'>
          <span className='footer__end_text'>© Tattoo Thế Trung. {t('footer.rights_reserved')} 2024.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
