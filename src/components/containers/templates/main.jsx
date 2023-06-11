import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";

export const Main = ({ children, className, width }) => {
  const mainInnerMaxWidth = width !== "null" ? "600px" : null;
  return (
    <BaseMain className={className}>
      <MainInner maxWidth={mainInnerMaxWidth}>{children}</MainInner>
    </BaseMain>
  );
};

Main.defaultProps = {
  className: "",
  width: "",
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
};

const BaseMain = styled.main`
  ${mediaquery.phone`
    margin-top: 50px;
  `}
  ${mediaquery.desk`
    padding-left: 23%;
  `}
`;

const MainInner = styled.div`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: 900px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  ${mediaquery.phone`
    margin-bottom: 52.5px;
  `}
`;
