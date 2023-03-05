import { Row, Col, Card } from "react-bootstrap";

const Blog = () => {
	const allBlogs = [
		{id: "1", title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur elit. Accusantium laudantium corrupti ab reiciendis vero aliquam iste nisi excepturi quia, necessitatibus."},
		{id: "2", title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laudantium corrupti ab reiciendis vero aliquam iste nisi excepturi quia."},
		{id: "3", title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laudantium nisi excepturi quia, necessitatibus."},
		{id: "4", title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laudantium corrupti ab  excepturi quia, necessitatibus."},
		{id: "5", title: "Lorem ipsum dolor sit", body: "consectetur adipisicing elit. Accusantium laudantium corrupti ab reiciendis vero aliquam iste nisi excepturi quia, necessitatibus."},
		{id: "6", title: "Lorem ipsum dolor sit", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laudantium corrupti ab reiciendis vero aliquam iste nisi excepturi quia, necessitatibus consectetur adipisicing elit. Accusantium laudantium corrupti."},
		];
return (
	<section  >
	<h1 className="text-center">Our Blogs</h1>
	<Row xs={1} md={2} lg={3}>
		{
			allBlogs.map(blog => 
			<Col className="p-2" key={blog.id}>
			   <Card className="p-2 h-100 shadow">
			     <Card.Title className="text-center">{blog.title}</Card.Title>
			     <Card.Body >{blog.body}</Card.Body>
			   </Card>
			</Col>
			)
		}
	</Row>
	</section >
);
};

export default Blog;