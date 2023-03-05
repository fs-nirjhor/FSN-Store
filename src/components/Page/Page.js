import { Pagination } from "react-bootstrap";

const Page = () => {
	
return (
	<div style={{pointerEvents: "none"}}>
		<Pagination size="lg" className="justify-content-center my-3">
      <Pagination.Prev disabled/>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
	</div>
);
};

export default Page;