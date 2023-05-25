import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 15px;
  ${mediaquery.phone`
    margin-top: 70px;
  `}
  ${mediaquery.desk`
    padding-left: 20%;
  `}
`;
