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
    const activeSlide = data.carousel[this.state.activeSlide];
    let allBackgroundsArray = [];
    for (let i = 0, x = data.carousel.length; i < x; i++) {
      allBackgroundsArray.push(`url(/src/${data.carousel[i].imageurl})`);
    }

    return(
      <Carousel
        allBackgroundsArray={allBackgroundsArray}
        title={activeSlide.title}
        synopsis={activeSlide.synopsis}
        link={`http://${activeSlide.link}`}
        totalSlides={data.carousel.length}
        activeSlide={this.state.activeSlide}
        onClickArrow={(direction) => this.handleClickArrow(direction)}
        onClickDot={(slideNumber) => this.handleClickDot(slideNumber)} />
    );
  }
}
