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

  @keyframes leftslide {
    0% {left: 0%;}
    100% {left: 40%}
  }


`
const Modal = props => {
    return (
            <ModalWrapper {...props}>   
            <span style={{color: 'black', fontWeight: 'bold'}}> Thank you! </span>
            {props.children}
            </ModalWrapper>

    )
}

export default Modal