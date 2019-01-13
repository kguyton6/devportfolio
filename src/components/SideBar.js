import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";



const MenuWell = styled(Menu)`
  width: 200px;
  height: 100vh;
  display: inline-block;
  background-color: #303741;
  color: white;
  display: flex;
  flex-direction: column;
  text-indent: 5px;
  line-height: 30px;
  padding-top: 10px;
  margin: 0;
  -webkit-transition-delay: 3s;
  border-color: #303741;

  span {
    cursor: pointer;
  }
  a:hover,
  span:hover {
    background-color: lightgrey;
    color: black;
  }
  a {
    text-decoration: none;
    color: white;
  }
  button {
    display: none;
  }
`;

const SideBar = (props) => {

    const { open } = props;
    return (
      <MenuWell
        customBurgerIcon={false}
        width="250px"
        isOpen={open}
        noOverlay
        onStateChange={props.handleStateChange}
        disableOverlayClick={true}
      >
        {props.children}
      </MenuWell>
    );
  }



export default SideBar
