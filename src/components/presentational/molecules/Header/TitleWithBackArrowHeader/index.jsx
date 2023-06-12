import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BackArrow } from "../../../atoms/Arrow/BackArrow";
import { Title } from "../../../atoms/Title";

export const TitleWithBackArrowHeader = memo(({ title }) => (
  <BaseTitleWithBackArrowHeader>
    <BackArrow />
    <TitleCover>
      <Title>{title}</Title>
    </TitleCover>
  </BaseTitleWithBackArrowHeader>
));

TitleWithBackArrowHeader.displayName = "TitleWithBackArrowHeader";

TitleWithBackArrowHeader.defaultProps = {
  title: "",
};

TitleWithBackArrowHeader.propTypes = {
  title: PropTypes.string,
};

const BaseTitleWithBackArrowHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  z-index: 9999;
`;

const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
