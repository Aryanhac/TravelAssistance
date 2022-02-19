import React,{useEffect,useState} from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row} from 'react-bootstrap'
import List from './List'
import Map from './Map'
import getPlaces from './Api/index'
const TravelAssistance = () => {
    const [places,setPlaces]=useState();
    const [coordinates,setCoordinates]=useState();
    const [bound,setBound]=useState(null);
   
    useEffect(()=>{
       getPlaces().then((data)=>{
           console.log(data);
           setPlaces(data);
       })
    },[]);
    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row>
                   <List/>
                   <Map setCoordinates={setCoordinates}/>  
                </Row>
            </Container>
        </div>
    )
}

export default TravelAssistance