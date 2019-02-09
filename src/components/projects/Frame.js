import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  width: 95%;
  height: 600px;
  padding-top: 10px;
  @media (max-width: 900px){
      height:450px;
  }
  @media (max-width: 750px){
      height: 300px;
  }
  @media (max-width: 500px){
      height: 200px;
  }
`;

const Slider = styled.img`
  height: auto;
  width: 95%;
  padding: 5px;
  box-shadow: 0 0px 1px .5px lightgrey;
  
`;

const Frame = (props) => {
    const {src} = props
    return props.disabled ? (
        <Slider src={src} />
             ) :(
            <Iframe
            src={src}
            frameborder="2"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
       
    )
}

export default Frame