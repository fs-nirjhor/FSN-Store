import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";
import { useAuthState, useDeleteUser, useSignOut } from "react-firebase-hooks/auth";

const Profile = () => {
  const dispatch = useDispatch();
  
  const [user] = useAuthState(auth);
  const [deleteUser, deleting, deleteError] = useDeleteUser(auth);
  const [signOut, signingOut, signOutError] = useSignOut(auth);
  
  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      dispatch({ type: "OPEN_POPUP", message: "Logout Successful !" });
    }
  };
  if (signOutError) {
  	dispatch({ type: "OPEN_POPUP", message: signOutError.code });
  }
  const handleDelete = async () => {
    const success = await deleteUser();
    if (success) {
      dispatch({ type: "OPEN_POPUP", message: "Account Deleted !" });
    }
  };
  if (deleteError) {
    dispatch({ type: "OPEN_POPUP", message: deleteError.code });
  }

  return (
    <div className="text-center">
      {user.photoURL && (
        <img src={user.photoURL} alt="user" className="rounded-circle my-3" />
      )}

      <h1>{user.displayName}</h1>
      <h6 className="text-muted">{user.email}</h6>
      <Button variant="danger" className="w-100 my-3" onClick={handleSignOut}>
         {signingOut ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Sign Out"
        )}
      </Button>
      <Button variant="danger" className="w-100" onClick={handleDelete}>
        {deleting ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Delete Account"
        )}
      </Button>
    </div>
  );
};

export default Profile;
