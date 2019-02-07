import React from "react";
import styled from "styled-components";
import menu from '../assets/menu.png'
import NavBar from './NavBar'
import Button from './Button'
import {Link} from 'react-router-dom'
import DropDown from "./DropDown";
import {withRouter} from 'react-router'
const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, .945);
  height: 180px;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 30px 0px 20px 0px;
  align-items: center;
   box-sizing: border-box;
  flex-direction: column;

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;


  }
  a span {
    font-size: 28px;
    font-weight: 700;
    position: relative;
    margin-top: 20px;
    line-height: 80px;

  }
  i {color: white; font-size: 18px;}
 
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
      @media (max-width: 1250px){
          legend {width: 28%;}

      }
      @media (max-width: 900px){
        address {font-size: 12px;}
        /* legend {width: 33%;} */
      }
      
      @media (max-width: 750px){
        address {display: none;}
        legend {width: 15%;}
      }
      @media (max-width: 600px){
        button {display: none;}
        legend {position: absolute; top: 100px;}
      }
      @media(max-width: 450px){
        legend {width: 25%;}
    }
`;
const Menu = styled.img`
  display: none;
  @media(max-width: 600px) {
    display: inline-block;
    height: 40px;
    width: auto;
    cursor: pointer;
   
  }

`


class Header extends React.Component {
 state = {
   showDropdown: false,
   id: '',
   swap: false,
   title: 'Dev Portfolio',
   sub: 'Projects'
 }

 componentDidCatch(err){

 }

 toggleMenu = () => {
   this.setState(prevState => {
     return { showDropdown: !prevState.showDropdown }
   })
 }
 showMenu = () => {
   if(this.state.showDropdown){
     return <DropDown />
   }
 }


  render(){
    console.log(this.props)
  return (

    <StyledHeader {...this.props} >
      <div>
        <Link to='/'><span>{this.props.swap? this.state.sub : this.props.title}</span></Link>
        <Link to='/contact'>  <Button name='Get in Touch'/> </Link>
        <Menu src={menu} alt='menu' onClick={this.toggleMenu}/>
         </div>
         <hr/>
         <div>
         <NavBar swapLinks={this.props.swapLinks} swap={this.props.swap} /> 
         <legend>
         <address>kimguyton@gmail.com</address>
        <a href='https://twitter.com/Kguyton6'><i className="fab fa-twitter"></i></a> 
        <a href='https://www.linkedin.com/in/kimberly-guyton/'> <i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
        <a href='https://github.com/kguyton6'> <i className="fab fa-github"></i></a>
         </legend>


         </div>    
      {this.showMenu()}
    </StyledHeader>
 
  );
};
}


export default withRouter(Header)
