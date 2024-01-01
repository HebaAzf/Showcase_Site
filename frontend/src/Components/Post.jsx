import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

let cardSize = 445

const Post = ({posting}) => {
  return (
    <Card className = "my-3 p-3 rounded" style={{  width: cardSize, height: 'auto'  }} >

        <Link to= {`/posting/${posting._id}`}>
            <Card.Img src = {posting.image} 
            variant = "top" 
            style={{  width: cardSize-45, height: 'auto'  }} />
        </Link>

        <Card.Body>
            <Link to = {`/posting/${posting._id}`}>
                <Card.Title as = "h3">
                    <strong>{posting.title}</strong>
                </Card.Title>
            </Link>

            <Card.Text>
                <strong>{posting.name}</strong>
                {'\n'}
                {posting.description}
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Post