import React, { Component } from "react";
import Frame from './Frame'
import {Left, Right, Card } from './ProjectStyles'
import $ from 'jquery'; 



class Carousel extends Component {
  state = {
    currentImageIndex: 0,
    right: 10,
    left: 10,
    autoSlide: true
  };

  previousSlide = () => {
    const {slides} = this.props 
    const lastIndex = slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      autoSlide: false
    });
  };
  
  nextSlide = () => {
        const {slides} = this.props   
    const lastIndex = slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      autoSlide: false
    });

  };
  intervalTimer = () => {
    if (this.state.autoSlide) {
      setInterval(() => {
        const lastIndex = this.props.slides.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
          currentImageIndex: index
        });
      }, 5000);
    } else {
    }
  };

  render() {
      var heading = {
        textAlign: 'left', 
        color: 'grey',
        paddingBottom: '20px',
        width: '95%'
      }
      const {slide, title} = this.props.slides[this.state.currentImageIndex]

    return (
      <Card>
        {/* {this.intervalTimer()} */}
        <Left onTouchStart={this.previousSlide} onClick={this.previousSlide} className="fas fa-caret-left" />
            <p style={heading}>
              <i className="fas fa-tag" aria-hidden="true" />
              {title}
           </p>
           <Frame
             src={slide} disabled={this.props.disabled }/>
        <Right onTouchStart={this.nextSlide} onClick={this.nextSlide} className="fas fa-caret-right" />
        </Card>
    )
  }
}

export default Carousel;
