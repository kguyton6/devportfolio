import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";







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
            {/* {this.props.nav === 'landing' ? <> */}
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
            {/* </>
           :
<> */}
           {/* <NavLink to="/" onClick={this.props.toggleMenu}>
           <i className="material-icons"></i>Helo
      </NavLink> 
         <NavLink to="/about">
           <i className="material-icons"></i>PrivyChic
         </NavLink>
         <NavLink to="/contact">
           <i className="material-icons"></i>Roadmap
         </NavLink>
         <NavLink to="/projects">
           <i className="material-icons"></i>Projects
    </NavLink> </> } */}
          </MenuItems>


    );
  }
}

export default Nav
