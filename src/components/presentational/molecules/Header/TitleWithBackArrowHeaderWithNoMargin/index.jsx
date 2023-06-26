import { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BackArrow } from "../../../atoms/Arrow/BackArrow";
import { Title } from "../../../atoms/Title";

export const TitleWithBackArrowHeaderWithNoMargin = memo(({ title }) => (
  <BaseTitleWithBackArrowHeaderWithNoMargin>
    <BackArrow />
    <TitleCover>
      <Title>{title}</Title>
    </TitleCover>
  </BaseTitleWithBackArrowHeaderWithNoMargin>
));

TitleWithBackArrowHeaderWithNoMargin.displayName =
  "TitleWithBackArrowHeaderWithNoMargin";

TitleWithBackArrowHeaderWithNoMargin.defaultProps = {
  title: "",
};

TitleWithBackArrowHeaderWithNoMargin.propTypes = {
  title: PropTypes.string,
};

const BaseTitleWithBackArrowHeaderWithNoMargin = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  z-index: 20;
`;

const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
