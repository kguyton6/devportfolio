import React, {Component} from 'react'
import styled from 'styled-components';
import mobile from '../../assets/mobileview.png'
import business2 from '../../assets/business2.png'
import {Image} from '../ElementStyles'
import ImageGallery from 'react-image-gallery';
import classNames from 'classnames'
const CarouselContainer = styled.div`
width: 900px;
  display: flex;
  margin: 0 0 20px 20px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-80% - 20px))'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-80% - 20px)))'
    return 'translateX(0%)'
  }};
`

const Wrapper = styled.div`
 width: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  p {
      padding-bottom: 20px;
      font-size: 40px;
      margin: 20px;
      position: relative;
      width: 90%;
      display: flex;
      justify-content: space-between;
    @media(max-width: 750px){
        font-size: 32px;
    }  
  }

`

  
const Slider = styled.img`
    height: auto;
    width: 80%;
    
`
 


class Carousel extends Component {

        state = {
            currentImageIndex: 0,
            right: 10,
            left: 10,
            autoSlide: true
          
}

  previousSlide = () => {
    const lastIndex = this.props.slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = this.props.slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }
  intervalTimer = () => {
      setInterval(() => {
          const lastIndex = this.props.slides.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }, 5000)

}

  
  render() {
    return (
        <Wrapper>
        <p > <i
          left={`${this.state.left}%`}
          onClick={ this.previousSlide }
          className='fas fa-chevron-left'></i>Gallery  <i
          right={`${this.state.right}%`}
          onClick={this.nextSlide}
          className="fas fa-chevron-right"></i></p>
            {/* {this.intervalTimer()} */}

         <Slider src={this.props.slides[this.state.currentImageIndex]}/>

       

        </Wrapper>


    );
  }
}

export default Carousel


 
   
  

