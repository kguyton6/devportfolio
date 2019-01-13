import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";





const Links = styled.div`
  color: ${props => props.color || "white"};
  font-size: 15.5px;
  font-weight: 400;
  letter-spacing: 0.5px;
  width: ${props => props.width || "auto"};
  height: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent || "space-between"};
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    font-size: 15.5px;
    font-family: "Nunito";
    margin-right: 3%;
   
  }
  @media (max-width: 1500px) {
    a {
      font-size: 12px;
    }
  }
  @media (max-width: 1100px) {
    width: 150px;
    a {
      display: none;
    }
  }
  span {
    color: white;
  }
`;

const MenuItems = styled.div`
  display: flex;
  color: white;
  line-height: 45px;
  width: 60%;
  justify-content: space-evenly;

  a, span {
    display: flex;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    color: white;

  }
  i {
      margin-right: 15px;
      font-size: 22px;
  }
`;

class Nav extends React.Component  {
  
      render() {

    return (
                  
          <MenuItems onClick={this.props.toggleMenu}>
          
            {this.props.children}
            <NavLink to="/" onClick={this.props.toggleMenu}>
              <i className="material-icons"></i>Home
         </NavLink> 
            <NavLink to="/about">
              <i className="material-icons"></i>About
            </NavLink>
            <NavLink to="/contact">
              <i className="material-icons"></i>Contact
            </NavLink>
            <NavLink to="/projects">
              <i className="material-icons"></i>Projects
            </NavLink>
            <NavLink to="/gallery">
              <i className="material-icons"></i>Gallery
            </NavLink>
           
          </MenuItems>


    );
  }
}

export default Nav
