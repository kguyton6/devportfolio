import React from "react";
import styled from "styled-components";
import SideBar from './SideBar'
import NavBar from './NavBar'
import Button from './Button'
import {Link} from 'react-router-dom'

const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, .945);
  height: 180px;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 30px 20px 30px 0;
  align-items: center;
   box-sizing: border-box;
  flex-direction: column;

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding:0 20px 0 10px;
  }
  a span {
    font-size: 28px;
    font-weight: 700;
    position: relative;
    margin-top: 20px;
    line-height: 80px;

  }
  i {color: white; font-size: 18px;}
  .menu-icon {
      width: 60px;
      height: auto;
      margin-left: 3%;
      cursor: pointer;
    }
    @media(max-width: 600px) {
      height: 30px;
    }
    legend {
      font-size: 14px;
      font-weight: bold;
      width: 20%;
      display: flex;
      justify-content: space-between;
    }
      hr {
        width: 90%;
      margin: auto;
      }
`;



class Header extends React.Component {
 

  render(){
  const {toggleMenu} = this.props


  return (

    <StyledHeader {...this.props} >
      <div>
        <Link to='/'><span>Dev Portfolio</span></Link>
        <Link to='/contact'>  <Button name='Get in Touch'/> </Link>
         </div>
         <hr/>
         <div>
         <NavBar  /> 
         <legend>
         <email>kimguyton@gmail.com</email>
        <a href='https://twitter.com/Kguyton6'><i className="fab fa-twitter"></i></a> 
        <a href='https://www.linkedin.com/in/kimberly-guyton/'> <i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
        <a href='https://github.com/kguyton6'> <i class="fab fa-github"></i></a>
         </legend>


         </div>    
        {/* {this.props.children} */}
    </StyledHeader>
 
  );
};
}


export default Header
