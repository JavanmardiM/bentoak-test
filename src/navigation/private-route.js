import { Navigate } from "react-router-dom";
import { storage } from "../utilities/storage";

const PrivateRoute = (props) => {
  const { children } = props;
  const isLoggedIn = !!storage.getToken();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;
