import { useSelector } from "react-redux";

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
    <div className="bg-success bg-opacity-25 p-3 rounded my-2">
    {
    	allPricing.map((pricing, i) => 
    	<p className="d-flex justify-content-between" key={i}>
        <span>{pricing.type}</span>
        <span>${pricing.value}</span>
      </p>
    	)
    }
    </div>
  );
};

export default Pricing;
