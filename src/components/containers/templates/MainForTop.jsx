import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";

export const MainForTop = ({ children, className }) => (
  <BaseMain className={className}>
    <MainInner>{children}</MainInner>
  </BaseMain>
);

MainForTop.defaultProps = {
  className: "",
};

MainForTop.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseMain = styled.main`
  margin-top: 50px;
  ${mediaquery.desk`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const MainInner = styled.div`
  padding: 20px;
  ${mediaquery.desk`
    padding: 35px;
  `}
  ${mediaquery.desktop`
    padding: 70px;
  `}
`;
