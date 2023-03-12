import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const handleClick = () => {
		sendPasswordResetEmail(auth, email)
  .then(() => {
    dispatch({ type: "OPEN_POPUP", message: "Password reset email sent!" });
  })
  .catch((error) => {
    dispatch({ type: "OPEN_POPUP", message: error.code });
  });
	};
  return (
    <div className="px-5">
      <Form.Control 
      type="email" 
      placeholder="Email Address" 
       onChange = {(e) => setEmail(e.target.value)}
       required 
      />
      <Button variant="primary" onClick = {handleClick} >
        Change Password
      </Button>
    </div>
  );
};

export default ForgotPassword;
