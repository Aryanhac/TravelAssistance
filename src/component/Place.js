import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Place= ({place}) => {
  return (
      <div className='mb-4'>
    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{place.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  )
}

export default Place