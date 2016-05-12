import React, { Component } from 'react';

function CarouselDots({totalSlides, activeSlide, onClickDot}) {
  let dotsClassNameArray = [];
  let dotClassName;
  for (let i = 0, x = totalSlides; i < x; i++) {
    i === activeSlide
      ? dotClassName = "carousel__dot carousel__dot--active"
      : dotClassName = "carousel__dot"
    dotsClassNameArray.push(dotClassName);
  }

  return(
    <div className="carousel__dots">
      {dotsClassNameArray.map((dotClassName, index) => {
        return(
          <img
            className={dotClassName}
            src="/src/images/dot.png"
            key={index}
            onClick={() => onClickDot(index)} />
        );
      })}
    </div>
  );
}

export default CarouselDots;
