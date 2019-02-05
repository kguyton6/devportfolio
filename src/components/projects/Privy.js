import React from 'react'
import { Wrapper } from '../Styles';
import mobile from '../../assets/mobileview.png'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import business2 from '../../assets/business2.png'
import styled from 'styled-components'

const Div = styled.div `
    img {
    width: auto;
    height: 400px;
    }

`
const Privy = () => {
    return (
        <Wrapper>

               <Link to='/projects'>{`<< Go Back`}</Link>
            PrivyChic
            <Carousel>
                <Carousel.Item>
            <img 
               className="d-block w-100"
                src={mobile} aFlt='First slide'/>
 <Carousel.Caption>
      <h3>Mobile Responsive</h3>
      <p></p>
    </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
            <img 
            className="d-block w-100"
            src={business2} aFlt='Second slide'/>
            </Carousel.Item> */}
            </Carousel>

</Wrapper>
    )
}

export default Privy