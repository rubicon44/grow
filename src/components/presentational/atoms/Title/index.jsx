import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = memo(({ children, className }) =>
  <BaseTitle className={className}>{children}</BaseTitle>
);

Title.defaultProps = {
  className: "",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseTitle = styled.h2`
  font-size: 36px;
  font-family: YuMincho;
`;
