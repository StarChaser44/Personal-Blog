import React from 'react'
import Layout from '../Components/Layout'
import { Card, InputGroup, Button, FormControl } from 'react-bootstrap'
import substyle from '../Styles/subscribe.module.scss'

const subscribe = () => {
    return (
        <Layout>
            <p style={{textAlign: "center"}}>Subscribe to me below!</p>
            <Card bg="light" className={substyle.card}>
                <Card.Header>Subscribe Here</Card.Header>
                <Card.Body>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">subscribe</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Card.Text>
                    <div id={substyle.textfmt}>Don't worry, you won't be spammed since emails are weekly!</div>
                </Card.Text>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export default subscribe;