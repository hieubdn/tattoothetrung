import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./TestimonialSection.css";

const TestimonialSection = ({ testimonials }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleShowPopup = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedTestimonial(null);
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => <FaStar key={i} className="star-icon" />);
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-slider__title">{t('testimonialsection.title')}</h2>
      {testimonials.length > 0 ? (
        <div className="testimonial-slider-container">
          <button className="arrow-button" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <div className="testimonial-cards">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .concat(
                testimonials.slice(
                  0,
                  Math.max(0, currentIndex + 3 - testimonials.length)
                )
              )
              .map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div
                    className="testimonial-text__div"
                    onClick={() => handleShowPopup(testimonial)}
                  >
                    <p className="testimonial-text">" {testimonial.text} "</p>
                  </div>
                  <div className="testimonial-profile">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="avatar"
                      />
                    )}
                    <div className="name__star">
                      <span className="profile-name">{testimonial.name}</span>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button className="arrow-button" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      ) : (
        <p className="no-testimonials">Chưa có đánh giá nào.</p>
      )}

      {showPopup && selectedTestimonial && (
        <div
          className="testimonial-slider__popup-overlay"
          onClick={handleClosePopup}
        >
          <div
            className="testimonial-slider__popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="testimonial-slider__popup-title">
              {/* Thêm avatar */}
              {selectedTestimonial.avatar && (
                <img
                  src={selectedTestimonial.avatar}
                  alt={`${selectedTestimonial.name}'s avatar`}
                  className="testimonial-slider__popup-avatar"
                />
              )}
              <div className="name__stars">
              <span className="testimonial-slider__popup-name">
                {selectedTestimonial.name}
              </span>
              <div className="testimonial-slider__popup-rating">
                {Array(selectedTestimonial.rating)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
              </div>
              </div>
            </div>
            <div className="testimonial-slider__popup-text-container">
              <p className="testimonial-slider__popup-text">
                {selectedTestimonial.text}
              </p>
            </div>

            <button className="close-button" onClick={handleClosePopup}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
