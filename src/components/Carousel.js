import React from 'react';
import CarouselBackgrounds from './CarouselBackgrounds';
import CarouselText from './CarouselText';
import CarouselArrow from './CarouselArrow';
import CarouselDots from './CarouselDots';

function Carousel({allBackgroundsArray, title, synopsis, link, onClickArrow, onClickDot, totalSlides, activeSlide}) {
  return(
    <div className="carousel">
      <CarouselBackgrounds allBackgroundsArray={allBackgroundsArray} totalSlides={totalSlides} activeSlide={activeSlide} />
      <div className="carousel__content">
        <CarouselText title={title} synopsis={synopsis} link={link} />
        <CarouselArrow direction="left" onClickArrow={() => onClickArrow('left')} />
        <CarouselArrow direction="right" onClickArrow={() => onClickArrow('right')} />
        <CarouselDots totalSlides={totalSlides} activeSlide={activeSlide} onClickDot={(slideNumber) => onClickDot(slideNumber)} />
      </div>
    </div>
  );
};

export default Carousel;
