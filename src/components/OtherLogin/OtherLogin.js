import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { auth } from "../../firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const OtherLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "ADD_LOGGED_USER", user });
        navigate(location.state ? location.state.from : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        dispatch({ type: "OPEN_POPUP", message: errorCode });
      });
  };

  return (
    <div>
      <Button
        variant="danger"
        onClick={() => handleLogin(googleProvider)}
        className="my-3 mx-auto d-block w-75"
      >
        <FontAwesomeIcon icon={faGoogle} className="me-3" /> Login with Google
      </Button>

      <Button
        variant="primary"
        onClick={() => handleLogin(facebookProvider)}
        className="my-3 mx-auto d-block w-75"
      >
        <FontAwesomeIcon icon={faFacebook} className="me-3" /> Login with
        Facebook
      </Button>
    </div>
  );
};

export default OtherLogin;
