
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faDollar } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
	
	const allServices = [
		{id: "1", icon: faBusAlt, title: "Fast & Safe Home Delivery"},
		{id: "2", icon: faDollar, title: "Reasonable Price & Discount"},
		{id: "3", icon: faShopify, title: "Best Quality Products" },
		];
		
return (
	<div className="mt-5">
		<h1>Why are you choose our service ?</h1>
		<Row >
		 {
		 	allServices.map(service => 
		 	<Col xs={12} md={4} className="p-2" key={service.id}>
		 	  <div className="text-center border border-2 rounded h-100 pt-2 bg-success bg-opacity-25">
		      <FontAwesomeIcon icon={service.icon} className="fs-1 h1 text-success"/>
		      <h3>{service.title}</h3>
		 	  </div>
		   </Col>
		 	)
		 }
		</Row>
	</div>
);
};

export default Services;