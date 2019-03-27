import React from 'react'
import Carousel from './Carousel'
import ButtonToggle from './ButtonToggle';
import {Container, Title} from './ProjectStyles'



class Privy extends React.Component {
   state = {
    slides: [
        {
         slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome.png',
         title: 'Landing Page 1 of 2'
        },
        {
         slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome2.png',
         title: 'Landing Page 2 of 2'
        },
        {
         slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/business.png',
         title: 'Business Page 1 of 2'
        },
        {
         slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/business2.png',
         title: 'Business Page 2 of 2'
        },
        {
        slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/searchresults.png',
        title: 'Search Results'
        },
        {
         slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/privylogin.png',
         title: 'Login Modal'
        }
],
    videos: [
        {
         slide: "https://www.youtube.com/embed/kSV9YAjTf4k",
         title: "Site Walk Through"
        },
        {
         slide: "https://www.youtube.com/embed/WaZ6fbn3IHU",
         title: "This clip demonstrates the ability to book an appointment and the use of Stripe to secure the slot."
        },
         

    ],
    currentVideoIndex: 0,
    showGallery: true,


   }
  toggle = () => {
    this.setState(prevState => {
        return { showGallery: !prevState.showGallery}
    })
  }

  render() {
   const {showGallery, slides, videos} = this.state
    let slide = showGallery ? slides : videos
      return ( 
          <Container>
          
              <ButtonToggle toggle={this.toggle} disabled={showGallery}/>
               
                <Carousel link={'privychic.com'} disabled={showGallery} slides={slide} />
    
                </Container>

      )
      
    }
}

export default Privy
