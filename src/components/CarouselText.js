import React from 'react';

function CarouselText({title, synopsis, link}) {
  return(
    <div className="carousel__text">
      <div><h1 className="carousel__h1">{title}</h1></div>
      <div><h4 className="carousel__h4">{synopsis}</h4></div>
      <div className="carousel__link-div"><a className="carousel__link" href={link}>Learn More</a></div>
    </div>
  );
};

export default CarouselText;
