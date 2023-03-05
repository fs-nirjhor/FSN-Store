import { Badge } from "react-bootstrap";

const Line = () => {
  return (
    <div className="d-flex flex-row">
      <hr className="border rounded-circle border-primary border-2 opacity-75 w-100" />
      <Badge pill className="px-3 fs-5 fw-light">OR</Badge>
      <hr className="border rounded-circle border-primary border-2 opacity-75 w-100"></hr>
    </div>
  );
};

export default Line;
