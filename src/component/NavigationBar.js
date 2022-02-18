import React from 'react';
import {Navbar,Form,Container,FormControl} from 'react-bootstrap';
import './NavigationBar.css'
import {Autocomplete} from '@react-google-maps/api';

const NavigationBar = () => {
  return (
    <Navbar  expand="lg" className="main-Navbar">
    <Container fluid>
      <Navbar.Brand href="#" className="main-Heading">Travel Advisor</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Form className="d-flex">
           <div className="second-Heading">
             Explore Your Place
           </div>
          {/* <Autocomplete> */}
          <FormControl
            type="search"
            placeholder="India,US,NewYork "
            className="me-2"
            aria-label="Search"
          />
          {/* </Autocomplete> */}
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar