import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = memo(({ children, className }) => {
  return <BaseTitle className={className}>{children}</BaseTitle>;
});

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const BaseTitle = styled.h2`
  font-size: 36px;
  font-family: YuMincho;
`;
