import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";

export const MainForAuth = ({ children, className }) => (
  <BaseMain className={className}>
    <MainInner>{children}</MainInner>
  </BaseMain>
);

MainForAuth.defaultProps = {
  className: "",
};

MainForAuth.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseMain = styled.main`
  margin-top: 50px;
  ${mediaquery.phone`
  `}
  ${mediaquery.desk`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const MainInner = styled.div``;
