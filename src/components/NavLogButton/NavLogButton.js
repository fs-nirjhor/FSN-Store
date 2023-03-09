import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const NavLogButton = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLog = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          dispatch({ type: "REMOVE_LOGGED_USER" });
          dispatch({ type: "OPEN_POPUP", message: "Logout Successful !" });
        })
        .catch((error) => {
          dispatch({ type: "OPEN_POPUP", message: error.code });
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <Button variant="danger" 
    className="px-3 rounded-pill w-100"  onClick = {handleLog} >
      {
      loading ? <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      : user ? "Logout"
       : "Login"
      }
    </Button>
  );
};
export default NavLogButton;
