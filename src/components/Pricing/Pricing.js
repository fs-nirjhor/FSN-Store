import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Pricing = () => {
  const price = useSelector((state) => state.price);
  const { subtotal, tax, delivery, total } = price;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPricing = [
    { type: "Subtotal", value: subtotal },
    { type: "Tax", value: tax },
    { type: "Delivery Fee", value: delivery },
    { type: "TOTAL", value: total },
  ];
  const handlePay = () => {
    dispatch({ type: "CLEAN_CART" });
    navigate("/");
  };
  return (
    <div className="">
      {allPricing.map((pricing, i) => (
        <p
          className="d-flex justify-content-between bg-primary bg-opacity-25 p-3 rounded my-3"
          key={i}
        >
          <span>{pricing.type}</span>
          <span>${pricing.value}</span>
        </p>
      ))}
      <Form className="mt-5" onSubmit={handlePay}>
        <Form.Control type="text" 
        placeholder="Delivery Address" 
        className="my-3"
        required 
        />
        <Form.Control
          as="textarea"
          className="my-3"
          placeholder="Add delivery instructions"
          rows={2}
        />
        <Button
          variant="danger" 
          type="submit"
          className="d-block w-75 mx-auto my-3"
        >
          Pay Now
        </Button>
      </Form>
    </div>
  );
};

export default Pricing;
