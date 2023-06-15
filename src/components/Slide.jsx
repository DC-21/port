import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className="flex justify-center items-center h-screen">
      <div className="w-full">
        <Slider {...sliderSettings}>
          {websites.map((website, index) => (
            <iframe
              key={index}
              title={`Website ${index + 1}`}
              src={website}
              className="w-full h-screen"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
