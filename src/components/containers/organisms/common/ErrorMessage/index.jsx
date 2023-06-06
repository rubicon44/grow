import PropTypes from "prop-types";

export const ErrorMessage = ({ errorMessage }) => (
  <div>
    <p>{errorMessage}</p>
  </div>
);

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
