import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthContextProvider";
import { SignIn } from "../../components/containers/pages/auth/signIn";

export const PrivateRoute = ({ element: RouteComponent }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return currentUserAuth ? RouteComponent : <SignIn />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
