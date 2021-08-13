import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import './carousel.scss';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../../../assets/images/', true, /\.jpg$/));

const ICarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.9,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '6rem',
  };
  return (
    <Slider {...settings} className="carousel">
      <div className="carousel__item">
        <img src="assets/images/c-img-1.jpg" />
      </div>
      <div className="carousel__item">
        <img src="assets/images/c-img-2.jpg" />
      </div>
      <div className="carousel__item">
        <img src="assets/images/c-img-3.jpg" />
      </div>
      <div className="carousel__item">
        <img src="assets/images/c-img-4.jpg" />
      </div>
      <div className="carousel__item">
        <img src="assets/images/c-img-5.jpg" />
      </div>
    </Slider>
  );
};

export default ICarousel;
