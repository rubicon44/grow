import { memo } from 'react';
import styled from 'styled-components';
import { BackArrow } from '../../../atoms/arrow/backArrow';
import { Title } from '../../../atoms/title';

export const TitleWithBackArrowHeader = memo(({ children }) => {
  return (
    <BaseTitleWithBackArrowHeader >
      <BackArrow />
      <Title>{children}</Title>
    </BaseTitleWithBackArrowHeader>
  );
});

const BaseTitleWithBackArrowHeader = styled.div`
  display: flex;
  width: 100%;
  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;