import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import {auth} from "../../firebaseConfig";
import {
	signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {useDispatch} from "react-redux";
import Line from "../Line/Line";
import OtherLogin from "../OtherLogin/OtherLogin";

function Login() {
	const dispatch = useDispatch();
  const location = useLocation();
	const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  	const {name, email, password} = data ;
  	if (hasAccount) {
  		 signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
       dispatch({type: "OPEN_POPUP", message: `Welcome ${user.displayName}`});
       navigate(location.state ? location.state.from : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        dispatch({type:"OPEN_POPUP", message: errorCode});
      });
  	}
  	if(!hasAccount){
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        dispatch({type:"OPEN_POPUP", message: `Congrats ${name}`});
        setHasAccount(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        dispatch({type:"OPEN_POPUP", message: errorCode});
      });
  }
  };

  return (
    <section className="my-form text-center mx-md-5 mb-5">
      <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
      { !hasAccount && 
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <Form.Text>This field is required</Form.Text>
          )}
        </Form.Group>
      }
      <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <Form.Text>This field is required</Form.Text>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <Form.Text>Please enter a valid email address</Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: /^[a-zA-Z0-9]{6,16}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <Form.Text>This field is required</Form.Text>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <Form.Text>
              Password must contain at least 6 to 16 characters.
            </Form.Text>
          )}
        </Form.Group>
        { !hasAccount && 
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <Form.Text>{errors.confirmPassword.message}</Form.Text>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <Form.Text>This field is required</Form.Text>
            )}
        </Form.Group>
        }
        <Button variant="primary" type="submit" className="w-100">
          {hasAccount ? "Login" : "Signup"}
        </Button>
      </Form>
      <p className="mt-3 text-primary" onClick = { () => setHasAccount(!hasAccount) }> 
      Already have an account? </p>
      <Line/>
      <OtherLogin/>
    </section>
  );
}

export default Login;
