import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Artist.css'

function Artist(props) {
  return (
    <Card className='artistCard' >
      <Card.Img variant="top" src={`${props.image}` } />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Button variant="success">Reproducir</Button>
      </Card.Body>
    </Card>
  )
}

export default Artist