import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import Post from '../Components/Post'
import axios from 'axios'
import postings from '../PostingDetails'

let SmallPDist = 10;

/* const HomeScreen = () => {
    const [postings, setPostings] = useState([])

    //array of dependencies- if you put smth in here it'll load
    useEffect(() => {
        const fetchPostings = async () => {
        const {data} = await axios.get('/api/postings')
        setPostings(data);
        }
        
        fetchPostings();
    }, [])

    return ( */
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
/*     )
}
 */
export default HomeScreen