import React from "react";
import styled from "styled-components";



const ModalWrapper = styled.div`
  width: ${props => props.width || '300px'};
  height: ${props =>  props.height || '110px'};
  background-color: white;
  position: absolute;
  left: 40%;
  color: black;
  font-size: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  animation: leftslide .5s ease forwards;
  z-index: 10;

  @keyframes leftslide {
    0% {left: 0%;}
    100% {left: 40%}
  }
  @media(max-width: 950px){
    @keyframes leftslide {
      0% {left: 0%;}
      100% {left: 33vw;}
    }
  }
  @media(max-width: 700px){
    @keyframes leftslide {
      0% {left: 0%;}
      100% {left: 28%;}
    }
  }
  @media(max-width: 500px){
    width: 200px;
    button { width: 60%;}
    
  }
  @media(max-width: 450px){
    @keyframes leftslide {
      0% {left: 0%;}
      100% {left: 22%;}
    }

  }


`
const Modal = props => {
  console.log(props.children)
    return (
            <ModalWrapper {...props}>   
            {props.children}
            </ModalWrapper>

    )
}

export default Modal