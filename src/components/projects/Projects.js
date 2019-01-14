import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import helo from '../../assets/helohome.png'
import {Main} from '../Styles'
const Img = styled.img`
    width: 30%;
    height: 300px;

`
const ProjectContainer = styled(Main)`
    background-color: black;
    background-image: none;
  
`

class Projects extends React.Component {
  render() {
    return (
        <ProjectContainer>
            <div className='project-preview'>
        <Img src={helo} alt='preview'/>
      <Link to="/helo">
        <Button name="Check Out More" />
      </Link>
      </div>
      </ProjectContainer>
    );
  }
}

export default Projects;
