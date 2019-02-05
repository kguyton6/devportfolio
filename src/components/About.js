import React from 'react'
import styled from 'styled-components'
import pic from '../assets/Kim.png'
import {Wrapper} from './Styles'
import Button from './Button'
import {Link} from 'react-router-dom'

const Picture = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 60%;
    margin: 30px;
    border: black thin solid;
`


class About extends React.Component {
    render(){
        return (
            <Wrapper>
                <h1>The Full Story</h1>
                <Picture src={pic} alt=''/>
                <p>As a passionate and motivated developer, I’m constantly striving to improve my technique, expand my skillset and find new opportunities to grow. Each of my projects - both solo and collaborative - have provided growth and allowed me to establish myself within this competitive industry. </p>
               <Link to='/contact'> <Button name='Get in Touch'/> </Link>
            </Wrapper>
        )
    }
}

export default About