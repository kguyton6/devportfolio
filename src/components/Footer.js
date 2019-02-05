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
    justify-content: space-between;
    links {
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
            <email>kimguyton@gmail.com<br/>
            435-669-1797</email>
            </address>
            <links>
           <a href='https://twitter.com/Kguyton6'><i className='fab fa-twitter'></i></a> 
           <a href='https://www.linkedin.com/in/kimberly-guyton/'><i className='fab fa-linkedin'></i></a> 
           <a href='https://github.com/kguyton6'><i className='fab fa-github'></i></a> 
           </links>
        </StyledFooter>
    )
}

export default Footer