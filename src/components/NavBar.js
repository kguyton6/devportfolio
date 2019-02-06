import React from "react";
import styled from "styled-components";
// import Button from "./Button";
import { NavLink } from "react-router-dom";
const Link = styled(NavLink)`
    display: inline;
    font-size: 14px;
    font-weight: 700;
    color: white;
    position: relative;
    .active {
    text-decoration-line: underline;

}
`

const Nav = styled.nav`
  display: flex;
  width: 26%;
  color: white;
  justify-content: space-between;
  @media(max-width: 1250px){
    width: 33%;
    
  }
  @media (min-width: 750px) and (max-width: 900px){
    a {font-size: 12px;}
    
  }
  @media(max-width: 900px){
    width: 50%;
    /* a {font-size: 14px;} */
    
  }
  @media(max-width: 600px){
    display: none;
  }
`;

class NavBar extends React.Component  {
  
      render() {

    return (
                  
          <Nav onClick={this.props.toggleMenu}>
          
            {this.props.children}
            {/* {this.props.nav === 'landing' ? <> */}
            <Link activeClassName='active' to="/" onClick={this.props.toggleMenu}>
             Home
         </Link> 
            <Link  activeClassName='active' to="/about">
             About
            </Link>
            <Link  activeClassName='active' to="/contact">
             Contact
            </Link>
            <Link  activeClassName='active'  to="/projects">
             Projects
            </Link>
            <Link  activeClassName='active' to="/skills">
             Skills
            </Link> 
            {/* </>
           :
<> */}
           {/* <NavLink to="/" onClick={this.props.toggleMenu}>
          Helo
      </NavLink> 
         <NavLink to="/about">
          PrivyChic
         </NavLink>
         <NavLink to="/contact">
          Roadmap
         </NavLink>
         <NavLink to="/projects">
          Projects
    </NavLink> </> } */}
          </Nav>


    );
  }
}

export default NavBar
