/* eslint-disable react/jsx-no-undef */
import {Nav, Navbar, NavDropdown,Form,Button,FormControl,Container} from 'react-bootstrap';
import React, {Component} from 'react';
import { BrowserRouter as  Router, Switch, Link, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import img1 from "../images/Tekmindz.png";
import "./cssfile.css"
import App from "../App"

export default class LoginPage extends Component{
    render() {
        return (
            <Router>
        <div>
            <Navbar bg="warning" expand="lg" className = "navbar navbar-custom" >
                <Container>
                <Navbar.Brand href="#home">
                <img src = {img1} alt ="TekMindz"/>
                 |
                </Navbar.Brand>
                <Nav.Link as={Link} to={"/SIGN-IN"}>SIGN-IN</Nav.Link>
                <Nav.Link as={Link} to={"/SIGN-UP"}>SIGN-UP</Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                        <Nav.Link href="https://www.tekmindz.com/">About Us</Nav.Link>
                        <NavDropdown title="More" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/Table Entries"}>TableEntries</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Chart"}>Chart</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div>
        <Switch>
            <Route path="/Home">
                <Dashboard/>
            </Route>
            <Route path="/SIGN-In">
                <SignIn/>
            </Route>
            <Route path="/SIGN-UP">
                <SignUp/>
            </Route>
            <Route path="/TableEntries">
                <App/>
            </Route>
        </Switch>
        </div>
            </Router>
    )
}
}