import React from 'react'
import styled from 'styled-components'
import {Wrapper} from './Styles'
import {withRouter} from 'react-router'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Modal from './Modal1';
const Button = styled.button `
    background-color: lightblue;
    width: 130px;
    height: 30px;
    border-radius: 3px;
`
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
    address, a {
        text-align: center;
        margin-bottom: 20px;

    }
    span {
        height: 50px;
        color: white;
        font-size: 20px;
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
        address, a {display: none;}
        h3 {font-size: 30px;}
    }
  
`
const appRoot = document.getElementById('root');

class Contact extends React.Component{
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        confirmation: false,
        disabled: true
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleTextArea = (e) => {
        this.setState({[e.target.name]: e.target.value,
                disabled: false })

    }
    toggleAlert = (e) => {
        e.preventDefault();
        this.setState({confirmation: true})
        return this.sendMessage()
    }
    sendMessage = (e) => {
        const {email, name, subject, message} = this.state
        axios.post('/api/message', {email, name, subject, message})
        .then(() => {
            this.setState({ message: '', name: '', email: '', subject: ''})
        })
        .catch(err => console.log(err))
    }
    toggle = () => {
        return this.props.history.push('/')
    }
  
    render(){
        return this.state.confirmation ? (
            <Modal>
            <Child toggle={this.toggle}/>
            </Modal>
        ):(
            <Wrapper>
            <Form onSubmit={this.sendMessage}>
                <h3>Get in Touch</h3>
                <address>kimguyton@gmail.com</address>
                <a href="tel:+14356691797">435-669-1797</a>
                <input required placeholder='Name' name='name' onChange={this.handleInput}/>
                <input required placeholder='Email' name='email'onChange={this.handleInput}/>
                <input required placeholder='Subject' name='subject' onChange={this.handleInput}/>
                <textarea required placeholder='Message' name='message' onChange={this.handleTextArea}/>
                <input disabled={this.state.disabled} id='button' type='submit' style={{textIndent:'unset', textAlign:'center'}}onClick={this.toggleAlert}/>
            </Form>
            </Wrapper>
        )
    }
}
export default withRouter(Contact)

function Child(props) {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
     <Button onClick={props.toggle}>Ok</Button>
    );
  }
  
ReactDOM.render(<Contact/>, appRoot)