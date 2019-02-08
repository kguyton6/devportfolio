import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
//Dropdown
export const Menu = styled.menu`
    background-color: white;
    padding: 15px;
    width: 115px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    top: ${props => props.top || "100px"};
    right: ${props => props.right || "5%"};
    color: black;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(135, 135, 165);
    justify-content: space-evenly;
    animation: drop .5s ease forwards;
    
    a {color: black; font-size: 20px;}
    a:hover {font-size: 25px; }

    @keyframes drop {
        0% {height: 0;}
        100% {height: 200px;}
    }
`

const DropDown = (props) => {
 
    return (
   
      <Menu open={props.open} {...props}>
        <Link to='/' onClick={props.onClose}>Home</Link>
        <Link to='/about' onClick={props.onClose}>About</Link> 
        <Link to='/contact' onClick={props.onClose}>Contact</Link>
        <Link to='/projects' onClick={props.onClose}>Projects</Link>
        <Link to='/skills'onClick={props.onClose}>Skills</Link>
      </Menu>


    );
   
  }


export default DropDown;