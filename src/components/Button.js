import React from 'react'
import styled from 'styled-components'

//Button

const StyledButton = styled.button`
background-color:${props => props.backgroundColor || 'transparent'};
color: ${props => props.color || 'white'};
padding: 5px;
width: 125px;
height: 45px;
font-size: 15px;
font-weight: 600;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
border: ${props => props.border || 'thin white solid' };
border-radius: 1px;
position: relative;
:hover {
    background-color: white;
    color: black;
    cursor: pointer;
}
@media(max-width: 1300px){
    width: 140px;
    height: 35px;
    font-size: 13px;
}
`



const Button = (props) => {
 

        const { disabled, name } = props
    return (
       
          <StyledButton backgroundColor={disabled? 'white' : 'black'} color={disabled ? 'black' : 'white'} {...props} id='button' >{name}
          </StyledButton>   
    )
}

export default Button