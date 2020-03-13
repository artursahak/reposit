import React,{Component} from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .navbar{
     background-color:darkcyan;
   }
   .nav-item{
     color:white;
   }

   .navbar-brand, .navbar-nav , .nav-link {
     font-weight:bold;
     color: white;
     &:hover{
       color:white;
     }
   }
`;


export const NavigationBar = () => (
      <Styles>
      <Navbar expand="lg" >
            <Navbar.Brand href="/">Sahak Service </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
                  <Nav className="ml-auto">
                   <Nav.Item> <Nav.Link href="/" >Home</Nav.Link> </Nav.Item>
                   <Nav.Item> <Nav.Link href="/about">About</Nav.Link> </Nav.Item>
                   <Nav.Item> <Nav.Link href="/contact">Contact</Nav.Link> </Nav.Item>
                  </Nav>
            </Navbar.Collapse>
      </Navbar>
      </Styles>
)
