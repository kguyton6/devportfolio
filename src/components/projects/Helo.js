import React from 'react'
import {Wrapper} from '../Styles'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const VideoWrapper = styled(Wrapper)`
    heading {font-size: 36px; font-family: 'Raleway', sans-serif; font-weight:500;}
    h2 {font-size: 20px; margin: 20px;}
    a {position: absolute; left: 5%; top: 0;}
`


const Helo = () => {
    return (
        <VideoWrapper>
            <Link to='/projects'>{`<< Go Back`}</Link>
            <heading>Helo</heading>
            <h2>Social Network Application</h2>
            
     <iframe width="60%" height="415" src="https://www.youtube.com/embed/-QSCTjlrrJY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </VideoWrapper>

    )
}


export default Helo