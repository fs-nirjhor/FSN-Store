import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";

function Slider() {
	const [latestProduct, setLatestProduct] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/men's clothing`)
		.then(res => res.json())
		.then(data => {
			setLatestProduct(data);
		})
		.catch(error => console.log(error));
	}, []);
  return (
  	<section className="mb-5">
    <Carousel >
      {
      	latestProduct.map(product => 
      	<Carousel.Item key={product.id}>
        <img
          className="d-block w-50 mx-auto"
          src={product.image}
          alt="Latest Product"
        />

        <Carousel.Caption className="bg-secondary mx-auto rounded-pill text-light bg-opacity-75 px-5">
          <h5>{product.title}</h5>
          <p>
            This is our brand new products of {product.category}.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      	)
      }
    </Carousel>
    </section>
  );
}

export default Slider;