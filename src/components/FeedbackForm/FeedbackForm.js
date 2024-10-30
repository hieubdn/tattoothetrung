import React, { useState } from "react";
import { UserName, Content, Upload, IDcard } from "../../assets/image/svg";
import "./FeedbackForm.css";
import { useTranslation } from "react-i18next";
import { sampleImages } from "../../assets/image/sampleImages";

const FeedbackForm = ({ addTestimonial }) => {
  const [hoverValue, setHoverValue] = useState(0);
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatarImage, setAvatarImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = (value) => setHoverValue(value);
  const handleMouseLeave = () => setHoverValue(0);
  const handleClick = (value) => setRating(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message && rating) {
      addTestimonial({ name, text: message, rating, avatar: avatarImage });
      setName("");
      setMessage("");
      setRating(0);
      setAvatarImage(null);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatarImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSampleImageClick = (image) => {
    setAvatarImage(image);
    setShowPopup(false);
  };

  return (
    <div className="feedback__form">
      <div className="feedback-form__content">
        {/* Rating stars */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              className={`star ${
                value <= (hoverValue || rating) ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(value)}
            >
              ★
            </label>
          ))}
        </div>

        {/* Form */}
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="container__feedback__form">
            <div className="upload-container">
              <div className="uploaded-image">
                <img
                  src={avatarImage || "https://via.placeholder.com/150"}
                  alt="Avatar"
                  className="avatar-image"
                  onClick={() => document.getElementById("avatarInput").click()}
                />
                <input
                  type="file"
                  id="avatarInput"
                  accept=".jpeg,.jpg,.png"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>

              {/* Khu vực upload và chọn hình có sẵn */}
              <div className="upload-controls-row">
                <label className="upload-label">
                  <input
                    type="file"
                    accept=".jpeg,.jpg,.png"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <div className="upload-placeholder">
                    <span>
                      <Upload />
                    </span>
                  </div>
                </label>
                <label
                  className="upload-label"
                  onClick={() => setShowPopup(true)}
                >
                  <div className="upload-placeholder">
                    <span>
                      <IDcard />
                    </span>
                  </div>
                </label>
              </div>

              {/* Popup chọn hình mẫu */}
              {showPopup && (
                <div className="feed-back__popup-overlay">
                  <div className="feed-back__popup-content">
                    <span>{t('feedback.enteravata')}</span>
                    <div className="feed-back__sample-images">
                      {sampleImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Sample ${index + 1}`}
                          onClick={() => handleSampleImageClick(image)}
                          className="feed-back__sample-image"
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="feed-back__close-popup-button"
                    >
                      {t('feedback.close')}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="content__feedback-form">
              <div className="content__feedback-form__text">
                <label className="footer_text">
                  <span>
                    <UserName />
                  </span>{" "}
                  {t('feedback.name')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('feedback.name')}
                  required
                />
              </div>
              <div className="content__feedback-form__text">
                <label className="footer_text">
                  <span>
                    <Content />
                  </span>{" "}
                  {t('feedback.content')}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('feedback.entercontent')}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit">{t('feedback.send')}</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
