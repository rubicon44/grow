import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = memo(({ children, className }) => (
  <BaseTitle className={className}>{children}</BaseTitle>
));

Title.displayName = "Title";

Title.defaultProps = {
  children: null,
  className: "",
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const BaseTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  font-family: YuMincho;
`;
