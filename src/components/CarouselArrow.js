import React, { Component } from 'react';

function CarouselArrow({direction, onClickArrow}) {
  return(
    <img
      className={`carousel__button carousel__button--${direction}`}
      src={`/src/images/${direction}-arrow.png`}
      onClick={onClickArrow} />
  );
}

export default CarouselArrow;
