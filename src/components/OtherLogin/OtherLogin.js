import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { auth } from "../../firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const OtherLogin = () => {
	// Providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(location.state ? location.state.from : "/");
        dispatch({type: "OPEN_POPUP", message: `Welcome ${user.displayName}`});
      })
      .catch((error) => {
        const errorCode = error.code;
        dispatch({ type: "OPEN_POPUP", message: errorCode });
      });
  };
  const otherLogins = [
  	{type: "Google", provider: googleProvider, icon: faGoogle, variant: "danger"},
  	{type: "Facebook", provider: facebookProvider, icon: faFacebook, variant: "primary"},
  	{type: "GitHub", provider: githubProvider, icon: faGithub, variant: "dark"}
  	];
  return (
    <div>
    {
    	otherLogins.map(login => 
    	 <Button
        variant= {login.variant}
        onClick={() => handleLogin(login.provider)}
        className="my-3 mx-auto d-block w-75"
      >
        <FontAwesomeIcon icon={login.icon} className="me-3" /> Continue with {login.type}
      </Button>
    	)
    }
    </div>
  );
};

export default OtherLogin;
