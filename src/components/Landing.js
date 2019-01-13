import React from 'react'
import Header from './Header'
import styled from 'styled-components'


const LandingPage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1543443436-bc6deeff2eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-position-y: -600px;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;


    div {
        width: 80%;
        height: 60%;
        background-color:rgba(3, 3, 3, 0.842);
        z-index: 10;
        box-shadow: 1px 1px 1px 1px rgba(3, 3, 3, 0.575);
        color: white;
        margin-top: 7%;
       display: flex;
       justify-content: center;
       align-items: center;


    }
    span {
        font-size: 80px;
        font-family:'Alegreya Sans SC', sans-serif;
        color: rgba(255, 255, 255, 0.774);
    }

`
const Landing = () => {
    return (
        <div className='App'>
        <Header />
            <LandingPage>
            <div><span>Kim Guyton</span></div>
        </LandingPage>
        </div>
    )
}

export default Landing