import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Productcards({item}) {
  return (
      <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{width:"17rem",height:"200px"}} src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
           {item.price}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */} 
      </Card.Body>
      <Card.Footer>
      <Link to={`/productdetail/${item.id}`} className='btn btn-outline-dark'>View more</Link>
      </Card.Footer>
    </Card>
    
      </>
  )
}

export default Productcards