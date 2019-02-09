import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import helo from '../../assets/helohome.png'
import privy from '../../assets/privyhome.png'
import roadmap from '../../assets/roadmap.png'
import {Img, ProjectContainer} from './ProjectStyles'

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
 <p>Simple application demonstrates filtering and sorting arrays, as well as my ability to work with PostgreSQL and select from multiple tables.  
 Along with Postgres, I used Node with Express, Auth0 for authentication, Redux and CSS.    
</p>
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

The application uses the Stripe API, Bcrypt for authentication, Nodemailer for appointment confirmation, and Redux for state management. Styled from scratch with styled-components.

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
This site is designed for Dev Mountain graduates to aid them towards a successful career as a developer. <br/> 

Uses Bcrypt for authentication, Redux for state management, Axios for HTTP requests and Styled-Components for design. I'm also using Node with Express and PostgreSQL for the backend.

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
