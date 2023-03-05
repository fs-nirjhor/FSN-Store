import { Modal } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";

const Popup = () => {
	const popup = useSelector(state => state.popup);
	const dispatch = useDispatch();
return (
		 <Modal
        size="sm"
        show={popup.isOpen}
        onHide={() => dispatch({type:"CLOSE_POPUP"})}
      >
        <Modal.Header closeButton className="bg-secondary bg-opacity-25 font-monospace">
           <span className="ms-auto">{popup.message}</span>
        </Modal.Header>
      </Modal>
);
};

export default Popup;