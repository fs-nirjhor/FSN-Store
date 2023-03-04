import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { Row } from "react-bootstrap";

const ProductCategory = (props) => {
	const {category} = props;
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${category}`)
		.then(res => res.json())
		.then(data => {
			setProducts(data);
		})
		.catch(error => console.log(error));
	}, [category]);
return (
	<section id={category} className="my-5">
	<p className="d-flex justify-content-between bg-warning p-2 rounded">
	  <span className="text-danger h1">{category.toUpperCase()}</span>
	  <span className="text-primary h5" >See All</span>
	</p>
		<Row>
		{
			products.map(product => <Product product={product} key={product.id}/>)
		}
		</Row>
	</section>
);
};

export default ProductCategory;