import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import headerlogo from '../assets/header-image.jpg'
import { Link } from 'react-router-dom';


class Navigation extends React.Component{
    // console.log(props);
    render(){
    return (
        <div >
        <span className="bg-primary"><img className="" src={headerlogo} alt="blank"></img></span>
        <Navbar bg="primary" className="" variant="dark">
            <Navbar.Brand as={Link} to="/">DLvery</Navbar.Brand>
                <Nav >
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/inventory/all">View Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/inventory/add">Add Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/executive/add">Add Executive</Nav.Link>
                    <Nav.Link as={Link} to="/assign/executive">Assign Executive</Nav.Link>
                    <Nav.Link as={Link} to="/executive/deliveries">Show My Deliveries</Nav.Link>
                </Nav>
        </Navbar>
        </div>
    )
    }
}

export default Navigation;