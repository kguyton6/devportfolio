import React from 'react'
import styled from 'styled-components'
import {Wrapper} from './Styles'
import Button from './Button';
import axios from 'axios'


const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
height:400px;
align-items: center;
justify-content: space-evenly;
box-sizing: border-box;
position: relative;
    input, textarea {
        border: white solid thin;
        background-color: transparent;
        width: 100%;
        box-sizing: border-box;
        display: block;
        color: white;
        text-indent: 10px;
        font-size: 16px;

        ::placeholder{
            font-size: 15px;
            text-indent: 10px;
            font-weight: bold;
        }
    }
    textarea {
        height: 100px;


    }
    input {
        height: 40px;
        /* margin: 3px; */
    }

    h3 {
        font-size: 40px;
        font-family: 'Raleway';
        margin-bottom: 20px;
    }
    email, a {
        text-align: center;
        margin-bottom: 20px;

    }
    
    #button {
        width: 80px;
        height: 35px;
        background-color: white;
        color: black;
        display: block;
        float: right;
        margin-top: 10px;
    }
    @media (max-width: 750px){
        textarea {height: 130px;}
    }
    @media (max-width: 600px){
        width: 80%;
        email, a {display: none;}
        h3 {font-size: 30px;}
    }
  
`

class Contact extends React.Component{
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    sendMessage = (e) => {
        e.preventDefault();
        const {email, name, subject, message} = this.state
        axios.post('/api/message', {email, name, subject, message})
        .then((res) => console.log(res.data))
    }
    render(){
        return (
            <Wrapper>
            <Form onSubmit={this.sendMessage}>
                <h3>Get in Touch</h3>
                <email>kimguyton@gmail.com</email>
                <a href="tel:+14356691797">435-669-1797</a>
                <input placeholder='Name' name='name' onChange={this.handleInput}/>
                <input placeholder='Email' name='email'onChange={this.handleInput}/>
                <input placeholder='Subject' name='subject' onChange={this.handleInput}/>
                <textarea placeholder='Message' name='message' onChange={this.handleInput}/>
                <button id='button' type='submit' onClick={this.sendMessage}>Send</button>  

            </Form>
            </Wrapper>
        )
    }
}

export default Contact