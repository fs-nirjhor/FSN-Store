import { Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
 const [blogs, setBlogs] = useState([]);
		useEffect(() => {
			fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => res.json())
			.then(data => {
				setBlogs(data);
			})
			.catch(error => console.log(error.message));
		}, []);
return (
	<section  >
	<h1 className="text-center">Our Blogs</h1>
	<Row xs={1} md={2} lg={3}>
		{
			blogs.map(blog => 
			<Col className="p-2" key={blog.id}>
			   <Card className="h-100 shadow">
			     <Card.Title className="text-center px-3 pt-3">{blog.title}</Card.Title>
			     <Card.Body >{blog.body}</Card.Body>
			     <Card.Footer className="text-primary d-flex flex-row justify-content-evenly">
			     <span><FontAwesomeIcon icon={faThumbsUp}/></span>
			     <span><FontAwesomeIcon icon={faMessage}/></span>
			     <span><FontAwesomeIcon icon={faShare}/></span>
			     </Card.Footer>
			   </Card>
			</Col>
			)
		}
	</Row>
	</section >
);
};

export default Blog;