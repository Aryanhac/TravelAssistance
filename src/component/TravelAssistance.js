import React from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col,DropdownButton,Dropdown} from 'react-bootstrap'
import Cards from './Cards'

const TravelAssistance = () => {
    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row>
                    <Col xs={4} style={{height:'92vh'}}>
                        <Container fluid>
                            <h2 className='mt-4'>Food & Dining Around You</h2>
                            <span>Type</span>
                            <Row className='mt-2'>
                                <Col xs={4}>
                                <DropdownButton id="dropdown-basic-button" title="Restaurant" >
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                                <Col xs={4}>
                                <DropdownButton id="dropdown-basic-button" title="Rating">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                            </Row>
                            <div style={{height:'72vh',overflowY:'scroll',marginTop:'15px'}}>
                                <Cards />
                            </div>
                        </Container>
                    </Col>
                    <Col xs={8} className='mt-4 ml-8'>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default TravelAssistance