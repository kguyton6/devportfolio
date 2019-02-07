import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import helo from '../../assets/helohome.png'
import privy from '../../assets/privyhome.png'
import roadmap from '../../assets/roadmap.png'
const Img = styled.img`
    max-width: 60%;
    max-height:350px;
  @media(max-width: 750px){
    max-width: 90%;
  }
`

const ProjectContainer = styled.main`
    display: flex;
    flex-direction: column;
    h1, h2 {text-align: center; margin: 20px;}
    h1 {font-size: 30px; }
    h2 {font-size: 20px;}
    .project-preview {
      display: flex;
      width: 100%;
      height: 400px;
      padding: 3%;
    }
    aside {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 3%;
      text-align: center;
      justify-content: space-evenly;
      height: auto;
      
    }
    #priv {flex-direction: row-reverse;}
    p {margin: 5%; line-height: 26px;}
    aside h3 { font-size: 24px; }
    aside h4 { font-size: 18px; }
    h3, h4 {line-height: 30px;}
    p h5 {margin: 5%;}

    @media (max-width: 900px){
      h4, h5 {display: none;}
      aside {width: 80%;}
      .project-preview {
        flex-direction: column-reverse;
        height: auto;
        align-items: center;
      }
      h3 {line-height: 20px;}
      #priv {flex-direction: column-reverse;}
      h2 {margin: 10px;}
    }
    @media(max-width: 600px){
     h1 { font-size: 25px}
    }
`

class Projects extends React.Component {
  render() {
    return (
        <ProjectContainer>
          <h1>Full Stack React Applications</h1>
        <div className='project-preview'>
        <Img src={helo} alt='preview'/>
        <aside>
        <h3>Helo</h3>
     <h4>Social Network</h4>
 <p>Simple application built with React, Node, Express, and PostgreSQL.  
Application uses Auth0 for authentication and Redux for state management.</p>
       <Link to="/projects/helo">
        <Button name="See More" />
      </Link>
      </aside>
      </div>
      <div className='project-preview' id='priv'>
        <Img src={privy} alt='preview'/>
        <aside>
        <h3>PrivyChic</h3>
     <h4>Hair Stylist Locater</h4>
 <p>  

Application designed for Business and Client relationships.  Client has the ability to find a stylist, see their prices, schedules and portfolio.  They can book their appointment and pay all within the application.  

</p>
       <Link to="/projects/privy">
        <Button name="See More" />
      </Link>
      </aside>
      </div>
      <div className='project-preview' >
        <Img src={roadmap} alt='preview'/>
        <aside>
        <h3>Roadmap</h3>
     <h4>Success Roadmap for Dev Grads</h4>
 <p>  
Application designed for Business and Client relationships.  Client has the ability to find a stylist, see their prices, schedules and portfolio.  They can book their appointment and pay all within the application.  

</p>
       <Link to="/projects/roadmap">
        <Button name="See More" />
      </Link>
      </aside>
      </div>

      </ProjectContainer>
    );
  }
}

export default Projects;
