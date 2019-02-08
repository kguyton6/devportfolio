import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import DropDown from './DropDown';
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

const Menu = styled.div`
    width: 60px;
    height: 100px;
    background-color: white;
    z-index: 1;
`

class Button extends React.Component {
 
    render(){
        console.log(this.props)
        const {disabled, children} = this.props
    return (
       
          <StyledButton backgroundColor={disabled? 'white' : 'black'} color={disabled ? 'black' : 'white'} {...this.props} id='button' >{this.props.name}
          </StyledButton>   
    )
  }

}

export default Button