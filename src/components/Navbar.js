import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import headerlogo from '../assets/header-image.jpg'

class Navigation extends React.Component{
    // console.log(props);
    render(){
    return (
        <div >
        <span className="bg-primary p-5"><img src={headerlogo} ></img></span>
        <Navbar bg="primary" className="p-2 pl-5" variant="dark">
            <Navbar.Brand href="/">DLvery</Navbar.Brand>
                <Nav >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/inventory/all">View Inventory</Nav.Link>
                    <Nav.Link href="/inventory/add">Add Inventory</Nav.Link>
                </Nav>
        </Navbar>
        </div>
    )
    }
}

export default Navigation;