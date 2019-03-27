import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Styles";
import { withRouter } from "react-router";
import ContactForm from './Form'
import axios from "axios";
import Modal from "./Modal";
import ReactDOM from 'react-dom'
const appRoot = document.getElementById('app-root')
const ModalWrapper = styled.div`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "110px"};
  background-color: white;
  position: absolute;
  left: 40%;
  color: black;
  font-size: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  animation: leftslide 0.5s ease forwards;
  z-index: 10;

  @keyframes leftslide {
    0% {
      left: 0%;
    }
    100% {
      left: 40%;
    }
  }
  @media (max-width: 950px) {
    @keyframes leftslide {
      0% {
        left: 0%;
      }
      100% {
        left: 33vw;
      }
    }
  }
  @media (max-width: 700px) {
    @keyframes leftslide {
      0% {
        left: 0%;
      }
      100% {
        left: 28%;
      }
    }
  }
  @media (max-width: 500px) {
    width: 200px;
    button {
      width: 60%;
    }
  }
  @media (max-width: 450px) {
    @keyframes leftslide {
      0% {
        left: 0%;
      }
      100% {
        left: 22%;
      }
    }
  }
`
const Button = styled.button`
  background-color: lightblue;
  width: 130px;
  height: 30px;
  border-radius: 3px;
  animation: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 400px;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  position: relative;
  color: white;
  input,
  textarea {
    border: white solid thin;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    display: block;
    color: white;
    text-indent: 10px;
    font-size: 16px;

    ::placeholder {
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

  }

  h3 {
    font-size: 40px;
    font-family: "Raleway";
    margin-bottom: 20px;
  }
  address,
  a {
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
  @media (max-width: 750px) {
    textarea {
      height: 130px;
    }
  }
  @media (max-width: 600px) {
    width: 80%;
    address,
    a {
      display: none;
    }
    h3 {
      font-size: 30px;
    }
  }
`;


class Contact extends React.Component {
  initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    alert: false,
    disabled: true
  };
  state = this.initialState

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleTextArea = e => {
    this.setState({ [e.target.name]: e.target.value, disabled: false });
  };
  
  toggleAlert = () => {
    this.setState(prevState => {
      return { alert: !prevState.alert}
      });

  };
  handleSubmit = (e) => {
    e.preventDefault(e)
    this.sendMessage(e)
  }
sendMessage = (e) => {
    const { email, name, subject, message } = this.state;
    const newMessage = {email, name, subject, message}
    axios.post("/api/message", { newMessage })
    .then(() =>  {
        this.refs.form.reset()
        return this.toggleAlert()
      } )
  }
  toggleHome = () => {
    return this.props.history.push("/");
  };

  renderModal = () => {
    if(this.state.alert){
      return (
        <ModalWrapper>
        <span style={{ color: "black", fontWeight: "bold" }}>
          {" "}
          Thank you!{" "}
        </span>
        <Button onClick={this.toggleHome}>Ok</Button>
      </ModalWrapper>
      )
    }
  }
 

  render() {
    return (
      <Wrapper>
        {this.renderModal()}
      
        <Form ref='form' onSubmit={this.handleSubmit}
          >
          <h3>Get in Touch</h3>
          <input
            type='text'
            required
            placeholder="Name"
            name="name"
            onChange={this.handleInput}
          />
          <input
           type='email'
            required
            placeholder="Email"
            name="email"
            onChange={this.handleInput}
          />
          <input
            required
            placeholder="Subject"
            name="subject"
            onChange={this.handleInput}
          />
          <textarea
            type='text'
            required
            placeholder="Message"
            name="message"
            onChange={this.handleTextArea}
          />
          <input
            disabled={this.state.disabled}
            id="button"
            value='Send'
            style={{ textIndent: "unset", textAlign: "center", cursor:'pointer' }}
            onClick={(e) => this.sendMessage(e)}
          />
        </Form>

      </Wrapper>
    )
  }
}
ReactDOM.render(<Contact/>, appRoot)
export default Contact
