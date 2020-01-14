import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerstyles from '../Styles/header.module.scss'
import { Nav, Navbar } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={headerstyles.header}>
            <h1>
                <Link className={headerstyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
             <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">EB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link>
                    <Nav.Link href="/Books">Books</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#github">
                        <IconButton target="_blank" href="https://github.com/starchaser44">
                            <FontAwesomeIcon style={{marginTop: "2px"}}icon={faGithubAlt}></FontAwesomeIcon>
                        </IconButton>
                    </Nav.Link>
                    <Nav.Link href="#instagram">
                        <IconButton target="_blank" href="https://instagram.com/blizik22">
                            <FontAwesomeIcon style={{marginBottom: "3px"}}icon={faInstagram}></FontAwesomeIcon>
                        </IconButton>
                    </Nav.Link>
                    <Nav.Link href="#twitter">
                        <IconButton target="_blank" href="https://twitter.com">
                            <FontAwesomeIcon style={{marginTop:"1px"}} icon={faTwitter}></FontAwesomeIcon>
                        </IconButton>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             </Navbar>
             </div>
        </header>
    )
}

export default Header;