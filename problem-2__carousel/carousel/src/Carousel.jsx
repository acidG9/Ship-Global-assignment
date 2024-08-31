import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-inner">
        <img
          src={images[currentIndex]}
          alt="carousel"
          onError={handleImageError}
        />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  fallbackImage: PropTypes.string.isRequired,
};

export default Carousel;
