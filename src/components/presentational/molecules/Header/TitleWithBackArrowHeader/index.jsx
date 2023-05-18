import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BackArrow } from "../../../atoms/Arrow/BackArrow";
import { Title } from "../../../atoms/Title";

export const TitleWithBackArrowHeader = memo(({ children }) => {
  return (
    <BaseTitleWithBackArrowHeader>
      <BackArrow />
      <Title>{children}</Title>
    </BaseTitleWithBackArrowHeader>
  );
});

TitleWithBackArrowHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const BaseTitleWithBackArrowHeader = styled.div`
  display: flex;
  width: 100%;
  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;
