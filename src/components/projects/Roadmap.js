import React from 'react'
import ButtonToggle from './ButtonToggle';
import { Container } from './ProjectStyles';
import Carousel from './Carousel';



class Roadmap extends React.Component {
    state = {
        showGallery: true,
        slides: [
            {
                slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/login.png',
                title: 'Login Modal'
            },
        
            {
                slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/IMG_5494.png',
                title: 'Dashboard'
            },
            {
                slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/appointmentmodal.png',
                title: 'Appointment Modal'  

            },
            {
                slide: 'https://s3.us-east-2.amazonaws.com/kims-portfolio/IMG_5493.png',
                title: 'Static Resource Page'
            },
         
        ],
        videos: [
            {
                slide: "https://www.youtube.com/embed/3gZxFGsIaas",
                title: 'Calendar and Appointment Modal'
            }
        ]

    }
 
    
    toggle = () => {
        this.setState(prevState => {
            return { showGallery: !prevState.showGallery}
        })
    }

    render(){
        var {videos, slides, showGallery} = this.state
        let slide = showGallery ? slides : videos
    return (
        <Container >
            <ButtonToggle disabled={this.state.showGallery} toggle={this.toggle} />

         <Carousel link={'dev-roadmap.info'} disabled={showGallery} slides={slide} />

          
        </Container>
    )
}
}

export default Roadmap