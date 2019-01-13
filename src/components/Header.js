import React from "react";
import styled from "styled-components";
import SideBar from './SideBar'
import Nav from './Nav'
// import menu from '../assets/menu.png'

const StyledHeader = styled.header`
  background-color: black;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  justify-content: space-evenly;

  .logo {
    width: 240px;
    height: 45px;
    margin-left: 150px;
    @media (max-width: 1100px) {
      margin-left: 80px;
    }
  }

  .menu-icon {
      width: 60px;
      height: auto;
      margin-left: 3%;
      cursor: pointer;
    }
    @media(max-width: 600px) {
      height: 30px;
    }
    h1 {
      text-indent: 5%;
      font-size: 40px;
      font-family: 'Happy Monkey';
      width: auto;
      @media (max-width: 1200px){
        font-size: 32px;
      }
      
    }
  
`;



class Header extends React.Component {
 

  render(){
  const {toggleMenu} = this.props


  return (

    <StyledHeader {...this.props} >

{this.props.children}

         <Nav className='nav' nav={this.props.nav} />     

    </StyledHeader>
 
  );
};
}


export default Header
