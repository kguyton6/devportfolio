import React from 'react';
import {Menu} from './ElementStyles.js'
import {Link} from 'react-router-dom'

const DropDown = (props) => {
 
    return (
   
      <Menu open={props.open} {...props}>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link> 
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/skills'>Skills</Link>
      </Menu>


    );
   
  }


export default DropDown;