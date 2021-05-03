import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import headerlogo from '../assets/header-image.jpg'

class Navigation extends React.Component{
    // console.log(props);
    render(){
    return (
        <div >
        <span className="bg-primary"><img className="" src={headerlogo} alt="blank"></img></span>
        <Navbar bg="primary" className="" variant="dark">
            <Navbar.Brand href="/">DLvery</Navbar.Brand>
                <Nav >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/inventory/all">View Inventory</Nav.Link>
                    <Nav.Link href="/inventory/add">Add Inventory</Nav.Link>
                    <Nav.Link href="/executive/add">Add Executive</Nav.Link>
                    <Nav.Link href="/assign/executive">Assign Executive</Nav.Link>
                </Nav>
        </Navbar>
        </div>
    )
    }
}

export default Navigation;