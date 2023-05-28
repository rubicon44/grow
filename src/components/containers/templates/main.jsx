import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";

export const Main = ({ children, className }) => (
  <BaseMain className={className}>
    <MainInner>{children}</MainInner>
  </BaseMain>
);

Main.defaultProps = {
  className: "",
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseMain = styled.main`
  ${mediaquery.phone`
    margin-top: 70px;
  `}
  ${mediaquery.desk`
    padding-left: 20%;
  `}
`;

const MainInner = styled.div`
  max-width: 600px;
  margin-bottom: 52.5px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;
