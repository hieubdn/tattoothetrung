import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import {
  ENG,
  Home,
  IconFacebookHeader,
  IconZaloHeader,
  Introduce,
  PriceList,
  Product,
  VNM,
} from "../../assets/image/svg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navVisible, setNavVisible] = useState(false);
  const [isVNM, setIsVNM] = useState(true);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const handleToggle = () => {
    setIsVNM(!isVNM);
    const newLanguage = isVNM ? 'en' : 'vi';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <span className="header__logo__text">
              T҉a҉t҉t҉o҉ T҉h҉ế T҉r҉u҉n҉g҉
            </span>
          </Link>
        </div>
        <button className="hamburger-menu" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`header__nav ${navVisible ? "show" : ""}`}>
         <div className="header__nav__content">
         <Link to="/" className="header__nav-item">
            <span className="header__nav-item__icon">
              <Home />
            </span>
            {t('header.home')}
          </Link>
          <Link to="/about" className="header__nav-item">
            <span className="header__nav-item__icon">
              <Introduce />
            </span>
            {t('header.about')}
          </Link>
          <Link to="/menu" className="header__nav-item">
            <span className="header__nav-item__icon">
              <Product />
            </span>
            {t('header.products')}
          </Link>
          <Link to="/specials" className="header__nav-item">
            <span className="header__nav-item__icon">
              <PriceList />
            </span>
            {t('header.price_list')}
          </Link>
         </div>
          <div className="header__actions">
            <div className="header__actions__contact">
              <a
                href="https://www.facebook.com/profile.php?id=100076736794297"
                className="header__icon"
              >
                <span>
                  <IconFacebookHeader style={{ width: "100%", height: "100%" }} />
                </span>
              </a>
              <span className="header__icon header__icon__zalo">
                <IconZaloHeader />
              </span>
            </div>
            <div
              className="header__language"
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
            >
              {isVNM ? (
                <VNM style={{ width: "100%", height: "100%" }} />
              ) : (
                <ENG style={{ width: "100%", height: "100%" }} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
