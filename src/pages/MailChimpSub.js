import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../Components/Layout'
import { Card  } from 'react-bootstrap'
import substyle from '../Styles/subscribe.module.scss'

class MailChimpSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email } = this.state;
        console.log("The email is: " ,email);
        
        axios
        .post('http://localhost:5000/signup', 
        {email: this.state.email},
        //{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
        .then(() => console.log("Email Added"))
        .catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <Layout>
                <p style={{textAlign: "center"}}>Subscribe to me below!</p>
                <Card bg="light" className={substyle.card}>
                    <Card.Header>Subscribe Here</Card.Header>
                    <Card.Body>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email here"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        ></input>
                        <button type="submit">Subscribe</button>
                    </form>
                    <Card.Text>
                        <div id={substyle.textfmt}>Don't worry, you won't be spammed since emails are weekly!</div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Layout>
        )
    }
}

export default MailChimpSub;