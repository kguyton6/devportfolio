import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import {Main} from './Styles'



const Landing = () => {
    return (
        <div className='App'>
        <Header />
            <Main>
            <div className='home-banner'><span>Kim Guyton</span></div>
        </Main>
        </div>
    )
}

export default Landing