import React from 'react'
import {Form} from './ElementStyles'
// import Input from './Input'
// import {FormControl, FormGroup} from 'react-bootstrap'



const ContactForm = (props) => {

    return (
        <Form {...props}>
            {props.children}

        </Form>
        

    )
}

export default ContactForm
