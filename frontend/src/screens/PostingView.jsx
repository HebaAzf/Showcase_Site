import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card} from 'react-bootstrap'
import axios from 'axios'
import postings from '../PostingDetails'

const PostingView = () => {
    const {id:postID } = useParams()
    //comparing post ID in link with IDs in array and returning the posting for that ID
    const posting = postings.find((p) => p._id === postID)

/*     const [posting, setPosting] = useState({})
    const { id:postID } = useParams()
    //comparing post ID in link with IDs in array and returning the posting for that ID

    useEffect(() => {
        const fetchPosting = async () => {
        const {data} = await axios.get(`api/Posting/${postID}`)
        setPosting(data);
        }
        
        fetchPosting();
    }, [postID]) */

  return (
    <>
        <Link className = 'btn btn-light my-3' to = '/'>
        Return
        </Link>

        <Row>
            <Col md={5}>
                <Image src = {posting.image} alt = {posting.title} fluid />
            </Col>
            
            <Col md={7}>
                <Card>
                    <ListGroup variant = 'flush'>

                        <ListGroup.Item>
                            <h3>{posting.title}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong>{posting.name}</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {posting.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>

        </Row>
    </>
  )
}

export default PostingView