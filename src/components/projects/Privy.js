import React from 'react'
import Carousel from './Carousel'
import styled from 'styled-components'
import Button from '../Button';

const Container = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    center {
        font-size: 36px;
    }
    p { font-size: 20px;width: 80%;  padding-bottom: 30px;}
  .far {margin: 10px; font-size: 26px;}
  /* .arrow {display: none;} */
  @media (max-width: 750px){
    p, .far {font-size: 14px;}
    .arrow {display: inline; margin: 5px; cursor: pointer;}
  }
  
`


class Privy extends React.Component {
   state = {
    slides: [
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome2.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/business.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/business2.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/searchresults.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privylogin.png',
],
    videos: [
        {
         video: "https://www.youtube.com/embed/fO-7IRUwfPA",
         about: "I'm showing here that the header responds differently, based off whether the user has a business or a client account."
        },
        {
         video: "https://www.youtube.com/embed/WaZ6fbn3IHU",
         about: "This clip demonstrates the ability to book an appointment and the use of Stripe to secure the slot."
        },
         {
         video: "https://www.youtube.com/embed/wzGWV-MzeqU",
         about: 'This is the Business landing view, the user can create a business account through this page.'
         },
         {
            video: "https://www.youtube.com/embed/QuRSTLbj6FM",
            about:''
         },
         {
            video: "https://www.youtube.com/embed/DLymsFAUwyo",
            about: ''
        }

    ],
    currentVideoIndex: 0,
    showGallery: true,


   }
  

  render() {
   const {showGallery, slides, videos} = this.state

      return ( 
          <Container>
              <div style={{display: 'flex', padding: '30px', marginBottom: '20px'}}>
                 <Button 
                 disabled={this.state.showGallery}
                 name='Photo Gallery'
                 onClick={() => this.setState({showGallery: !showGallery })}/>
                    <Button disabled={!this.state.showGallery} 
                    name="Video Demo's"
                  onClick={() => this.setState({showGallery: !showGallery })}/>
                 </div>
                
                <Carousel showGallery={showGallery} slides={slides} src={videos}/>
    
                </Container>

      )
      
    }
}

export default Privy