import React, { Component } from "react";
import styled from "styled-components";



const Slider = styled.img`
  height: 600px;
  width: 80%;
  @media (max-width: 900px){
      height: 450px;
  }
  @media (max-width: 750px){
      height:350px;
  }
  @media (max-width: 600px){
      height:250px;
  }
`;


const Card = styled.article`
        width: 90%;
        height: auto;
        box-sizing: border-box;
        padding: 50px 5px 10px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        position: relative;

`

const Right = styled.i`
  position: absolute;
  right: 15px;
  top: 50%;
  color: gray;
  font-size: 50px;
  @media (max-width: 750px){
   font-size: 30px;
  }
  @media (max-width: 500px){
    font-size: 20px;
    right: 5px;
  }
`;
const Left = styled.i`
  position: absolute;
  left: 15px;
  top: 50%;
  color: grey;
  font-size: 50px;
  @media (max-width: 750px){
    font-size: 30px;
  }
  @media (max-width: 500px){
    font-size: 20px;
    left: 5px;
  }

`;
const Iframe = styled.iframe`
  width: 90%;
  height: 600px;
  @media (max-width: 900px){
      height:450px;
  }
  @media (max-width: 750px){
      height:350px;
  }
`;

class Carousel extends Component {
  state = {
    currentImageIndex: 0,
    right: 10,
    left: 10,
    autoSlide: true
  };

  previousSlide = () => {
    const lastIndex = this.props.slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      autoSlide: false
    });
  };

  nextSlide = () => {
    const lastIndex = this.props.slides.length - 1;
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
    console.log(this.props);
    return (
      <Card>
      {/* <div>
      <i 
      onClick={this.previousSlide}
      className="fas fa-caret-square-left arrow"></i>
      <i onClick={this.nextSlide}  className="fas fa-caret-square-right arrow"></i>
      </div> */}
        {/* {this.intervalTimer()} */}
        <Left onClick={this.previousSlide} className="fas fa-caret-left" />

        {this.props.showGallery ? (
            <Slider src={this.props.slides[this.state.currentImageIndex]} />

        ) : (
            <>
            <p>
              <i className="far fa-hand-point-right" aria-hidden="true" />
              {this.props.src[this.state.currentImageIndex].about}
            </p>
            <Iframe
              src={this.props.src[this.state.currentImageIndex].video}
              frameborder="2"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
         </>
        )}

        <Right onClick={this.nextSlide} className="fas fa-caret-right" />
        </Card>

    );
  }
}

export default Carousel;
