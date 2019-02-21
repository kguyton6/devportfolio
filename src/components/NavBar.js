import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Link = styled(NavLink)`
  display: inline;
  font-size: 14px;
  font-weight: 700;
  color: white;
  position: relative;
  .active {
    text-decoration-line: underline;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 26%;
  height: ${props => props.height || "20px"};
  line-height: 25px;
  color: white;
  justify-content: space-between;
  transition: ${props => props.transition};
  @media (max-width: 1250px) {
    width: 30%;
  }
  @media (min-width: 750px) and (max-width: 900px) {

    a {
      font-size: 12px;
    }
  }
  @media (max-width: 900px) {
    width: 35%;
    /* a {font-size: 14px;} */
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const ProjectLinks = styled.nav`
  display: flex;
  width: 26%;
  height: ${props => props.height || "20px"};
  line-height: 25px;
  color: white;
  justify-content: space-between;
  transition: ${props => props.transition};
  @media (max-width: 1250px) {
    width: 33%;
  }
  @media (min-width: 750px) and (max-width: 900px) {
    a {
      font-size: 12px;
    }
  }
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

class NavBar extends React.Component {
  state = {
    id: "",
    showExpansionPanel: false
  };

  showPanel = () => {
    return (
      <ProjectLinks
        transition={this.state.transition}
        onClick={this.props.toggleMenu}
      >
        <Link to="/" onClick={() => this.props.swapLinks()}>
          <u>Home</u>
        </Link>
        <Link to="/projects/helo">Helo</Link>
        <Link to="/projects/privy">PrivyChic</Link>
        <Link to="/projects/roadmap">Roadmap</Link>
      </ProjectLinks>
    );
  };

  render() {
    return this.props.swap ? (
      this.showPanel()
    ) : (
      <Nav transition={this.state.transition} onClick={this.props.toggleMenu}>
        {this.props.children}
        <Link activeClassName="active" to="/" onClick={this.props.toggleMenu}>
          Home
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
        <Link
          onClick={() => this.props.swapLinks()}
          activeClassName="active"
          to="/projects"
        >
          Projects
        </Link>
        <Link activeClassName="active" to="/skills">
          Skills
        </Link>
      </Nav>
    );
  }
}

export default withRouter(NavBar);
