import PropTypes from "prop-types";
import styled from "styled-components";

export const Main = ({ children, className }) => (
  <BaseMain className={className}>{children}</BaseMain>
);

Main.defaultProps = {
  className: "",
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;
