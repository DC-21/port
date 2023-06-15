import React from 'react';
import Slider from 'react-slick';

const Slide = () => {
  // Define the websites to be embedded
  const websites = [
    'https://ai-chola.netlify.app/'
  ];

  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
      <Slider {...sliderSettings}>
        {websites.map((website, index) => (
          <iframe
            key={index}
            title={`Website ${index + 1}`}
            src={website}
            className="website-iframe"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
