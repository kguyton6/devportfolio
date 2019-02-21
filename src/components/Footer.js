import React from 'react'
import styled from 'styled-components'


const StyledFooter = styled.footer`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 130px;
    padding:20px;
    width: 100%;
    color: white;
    justify-content: space-between;
    nav {
        display: flex;
        width: 130px;
        justify-content: space-evenly;
    }
    address {
        text-align: center;
        line-height: 26px;
        font-weight: bold;
    }

`


const Footer = () => {
    return (
        <StyledFooter>
            <address>
            <a href="mailto:kimguyton@gmail.com.com">kimguyton@gmail.com</a> <br/>
            <a href="tel:+14356691797">435-669-1797</a>
            </address>
            <nav>
           <a href='https://twitter.com/Kguyton6' target='_blank'><i className='fab fa-twitter'></i></a> 
           <a href='https://www.linkedin.com/in/kimberly-guyton/' target='_blank'><i className='fab fa-linkedin'></i></a> 
           <a href='https://github.com/kguyton6' target='_blank'><i className='fab fa-github'></i></a> 
           </nav>
        </StyledFooter>
    )
}

export default Footer