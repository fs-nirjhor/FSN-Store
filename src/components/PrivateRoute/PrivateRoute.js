import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
	const {isValid, children} = props ;
	const location = useLocation();
if (isValid) {
	return children ? children : <Outlet/> 
} else {
  return	<Navigate replace to = "/login" state = {{from : location}} />
}
};

export default PrivateRoute;