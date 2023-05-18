import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BaseLink = ({ children, className, url }) => (
  <Link className={className} to={url}>
    {children}
  </Link>
);

BaseLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};
