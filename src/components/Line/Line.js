import { Badge } from "react-bootstrap";

const Line = () => {
  return (
    <div className="d-flex flex-row">
      <hr className="border rounded-circle border-secondary border-2 opacity-75 w-100" />
      <Badge pill bg="secondary" className="px-3 fs-5 fw-light">OR</Badge>
      <hr className="border rounded-circle border-secondary border-2 opacity-75 w-100"></hr>
    </div>
  );
};

export default Line;
