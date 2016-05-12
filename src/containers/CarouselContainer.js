import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import data from '../data.json';

export default class CarouselContainer extends Component {
  constructor() {
    super();
    this.state = {
      activeSlide: 0
    };
    this.timer = setInterval(() => this.handleClickArrow('right'), 5000);
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.handleClickArrow('right'), 5000);
  }

  handleClickArrow(direction) {
    let activeSlide = this.state.activeSlide;
    if (direction === 'left') {
      activeSlide === 0
        ? activeSlide = data.carousel.length-1
        : activeSlide--
    } else if (direction === 'right') {
      activeSlide === data.carousel.length-1
        ? activeSlide = 0
        : activeSlide++
    }
    this.setState({
      activeSlide
    });
  }

  handleClickDot(slideNumber) {
    this.setState({
      activeSlide: slideNumber
    });
  }

  render() {
    const slideData = data.carousel[this.state.activeSlide];
    return(
      <Carousel
        background={{ backgroundImage: `url(/src/${slideData.imageurl})` }}
        title={slideData.title}
        synopsis={slideData.synopsis}
        link={`http://${slideData.link}`}
        totalSlides={data.carousel.length}
        activeSlide={this.state.activeSlide}
        onClickArrow={(direction) => this.handleClickArrow(direction)}
        onClickDot={(slideNumber) => this.handleClickDot(slideNumber)} />
    );
  }
}
