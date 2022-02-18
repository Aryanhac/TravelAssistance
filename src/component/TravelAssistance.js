import React from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row} from 'react-bootstrap'
import List from './List'
import Map from './Map'

const TravelAssistance = () => {
    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row>
                   <List/>
                   <Map/>  
                </Row>
            </Container>
        </div>
    )
}

export default TravelAssistance