import React from 'react'
import Carousel from './Carousel'
import styled from 'styled-components'
const Wrapper = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

class Privy extends React.Component {
   state = {
    slides: [
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privyhome2.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/mobileview.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/business.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/business2.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/searchresults.png',
        'https://s3.us-east-2.amazonaws.com/kims-portfolio/privylogin.png',
]
   }

  render() {
   
      return (
        <Wrapper>

          <Carousel slides={this.state.slides}/>

          <h1>Demo</h1>
          <iframe width="70%" height="500px" src="https://www.youtube.com/embed/fO-7IRUwfPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Wrapper>

    )
        }
}

export default Privy