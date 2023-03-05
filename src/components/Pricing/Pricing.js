import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Pricing = () => {
  const price = useSelector((state) => state.price);
  const { subtotal, tax, delivery, total } = price;
  const allPricing = [
  	{type: "Subtotal", value: subtotal},
  	{type: "Tax", value: tax},
  	{type: "Delivery Fee", value: delivery},
  	{type: "TOTAL", value: total},
  	];
  return (
    <div className="">
    {
    	allPricing.map((pricing, i) => 
    	<p className="d-flex justify-content-between bg-primary bg-opacity-25 p-3 rounded my-2" key={i}>
        <span>{pricing.type}</span>
        <span>${pricing.value}</span>
      </p>
    	)
    }
    <Button variant="danger" className="d-block w-75 mx-auto my-3">
    Pay Now
    </Button>
    </div>
  );
};

export default Pricing;
