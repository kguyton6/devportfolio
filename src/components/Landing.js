import React from 'react'

import {Main, Section} from './Styles'



const Landing = () => {
   
    return (
        <div >
            <Main>
            <WelcomeBanner/>
             </Main>
        </div>
    )
}

export default Landing


export const WelcomeBanner = (props) => {
    return (
    <Section>
    <h1>Kimberly Guyton</h1>
    <h2>Web Developer</h2>
    <p>Welcome! I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. Enjoy browsing, and get in touch with any questions.</p>
    </Section> 

    )
}