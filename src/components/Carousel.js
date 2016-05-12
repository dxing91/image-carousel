import React from 'react';
import CarouselArrow from './CarouselArrow';
import CarouselDots from './CarouselDots';

function Carousel({background, title, synopsis, link, onClickArrow, onClickDot, totalSlides, activeSlide}) {
  return(
    <div className="carousel" style={background}>
      <div className="carousel__content">
        <div className="carousel__text">
          <div><h1 className="carousel__h1">{title}</h1></div>
          <div><h4 className="carousel__h4">{synopsis}</h4></div>
          <div className="carousel__link-div">
            <a className="carousel__link" href={link}>Learn More.</a>
          </div>
        </div>
        <CarouselArrow direction="left" onClickArrow={() => onClickArrow('left')} />
        <CarouselArrow direction="right" onClickArrow={() => onClickArrow('right')} />
        <CarouselDots totalSlides={totalSlides} activeSlide={activeSlide} onClickDot={(slideNumber) => onClickDot(slideNumber)} />
      </div>
    </div>
  );
};

export default Carousel;
