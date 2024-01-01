import React from 'react'
import {Row, Col} from 'react-bootstrap'
import posting from '../Components/Post'
import postings from '../PostingDetails'
import Post from '../Components/Post'

let SmallPDist = 10;

const HomeScreen = () => {
  return (
    <>
        <h1> Creations </h1>
        <Row>
            {postings.map((posting) => (
                <Col key = {posting._id} 
                sm = {SmallPDist} md = {SmallPDist-2} lg = {SmallPDist-4} xl = {SmallPDist-5}>
                    <Post posting = {posting} />
                </Col>
            ))}
        </Row>
    </>
    )
}

export default HomeScreen