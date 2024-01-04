import React from 'react'
import { useGetPostsQuery } from '../slices/postsApiSlice.js'
import {Row, Col} from 'react-bootstrap'
import Post from '../Components/Post'
import postings from '../PostingDetails.js'

let SmallPDist = 10;

const HomeScreen = () => {
    const { data, isLoading, error } = useGetPostsQuery({

      });
    //const [postings, setPostings] = useState([])

/*     //array of dependencies- if you put smth in here it'll load
    useEffect(() => {
        const fetchPostings = async () => {
        const {data} = await axios.get('http://localhost:5000/api/Postings')
        setPostings(data);
        }
        
        fetchPostings();
    }, [])  */

    return (
    <>
    {isLoading ? 
    (<h2>Loading...</h2>) : 
    error ? (<div>{error.data?.message || error.error}</div>) : 
    (<>
    <h1>Creations</h1>
        <Row>
            {postings.map((posting) => (
                <Col key = {posting._id} 
                sm = {SmallPDist} md = {SmallPDist-2} lg = {SmallPDist-4} xl = {SmallPDist-5}>
                    <Post posting = {posting} />
                </Col>
            ))}
        </Row> 
        </>
    )}
    </>
    )
}

export default HomeScreen