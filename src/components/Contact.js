import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Styles";
import { withRouter } from "react-router";
import axios from "axios";
import Modal from "./Modal";

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
  state = {
    name: "",
    _replyto: "",
    subject: "",
    message: "",
    alert: false,
    disabled: true
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleTextArea = e => {
    this.setState({ [e.target.name]: e.target.value, disabled: false });
  };
  toggleAlert = e => {
    e.preventDefault();
    this.setState({ alert: true });

  };
  sendMessage = e => {
    const { _replyto, name, subject, message } = this.state;
    axios
      .post("/api/message", { _replyto, name, subject, message })
      .then(() => {
       this.toggleAlert()
        this.setState({
          alert: true,
          message: "",
          name: "",
          _replyto: '',
          subject: ""
        });
      })
      .catch(err => console.log(err));
  };
  toggle = () => {
    return this.props.history.push("/");
  };
 

  render() {

    return this.state.alert ? (

        <Modal>
        <span style={{ color: "black", fontWeight: "bold" }}>
          {" "}
          Thank you!{" "}
        </span>
        <Button onClick={this.toggle}>Ok</Button>
      </Modal>
    ) : (
      <Wrapper>
        <Form onSubmit={this.sendMessage}
         action="#" 
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
            name="_replyto"
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
            type="submit"
            value='Send'
            style={{ textIndent: "unset", textAlign: "center", cursor:'pointer' }}
            onClick={this.sendMessage}
          />
        </Form>

      </Wrapper>
    );
  }
}
export default withRouter(Contact);
