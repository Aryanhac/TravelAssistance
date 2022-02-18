import {React,useState} from 'react'
import Cards from './Cards'
import {Col,Container,Row} from 'react-bootstrap'

const List = () => {
    const [type,setType]=useState('Restaurants');
    const [rating,setRating]=useState('All');
    const sType=(value)=>{
        setType(value);
    }

    const sRating=(value)=>{
        setRating(value);
    }


    return (
        <Col xs={4} style={{ height: '92vh' }}>
            <Container fluid>
                <h2 className='mt-4'>Food & Dining Around You</h2>
                <span>Type</span>
                <Row className='mt-2'>
                    <Col xs={4}>
                       <form action="">
                           <select value={type} name="" id="" onChange={(e)=>{
                               sType(e.target.value);
                           }}>
                               <option value="Restaurants">Restaurants</option>
                               <option value="Hotels">Hotels</option>
                               <option value="Attractive">Attractive</option>
                           </select>
                       </form>
                    </Col>
                    <Col xs={4}>
                    <form action="">
                           <select value={rating} name="" id="" onChange={(e)=>{
                               sRating(e.target.value);
                           }}>
                               <option value="0">All</option>
                               <option value="3">Above 3.0</option>
                               <option value="4">Above 4.0</option>
                               <option value="4.5">Above 4.5</option>
                           </select>
                       </form>
                    </Col>
                </Row>
                <div style={{ height: '72vh', overflowY: 'scroll', marginTop: '15px' }}>
                    <Cards />
                </div>
            </Container>
        </Col>
    )
}

export default List