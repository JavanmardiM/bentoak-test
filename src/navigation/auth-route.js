import { Navigate } from "react-router-dom";
import { storage } from "../utilities/storage";

const AuthRoute = (props) => {
  const { children } = props;
  const isLoggedIn = !!storage.getToken();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
export default AuthRoute;
