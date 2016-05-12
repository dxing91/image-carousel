import React from 'react';

function CarouselBackgrounds({allBackgroundsArray, totalSlides, activeSlide}) {
  return(
    <div className="carousel__backgrounds" style={{width: `${totalSlides*100}%`, marginLeft: `-${activeSlide*100}%`}}>
      {allBackgroundsArray.map((backgroundUrl, index) => {
        return (<div
                  className="carousel__background"
                  style={{width: `${100/totalSlides}%`, backgroundImage: `${backgroundUrl}`}}
                  key={index} />);
      })}
    </div>
  );
};

export default CarouselBackgrounds;
