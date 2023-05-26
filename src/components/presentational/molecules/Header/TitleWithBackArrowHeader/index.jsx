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
  display: flex;
  width: 100%;
  margin-left: -10px;
`;

const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
