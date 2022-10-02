import React from 'react';
import styled from 'styled-components';

export const Main = ({ children, className }) => {
  return <BaseMain className={className}>{children}</BaseMain>;
}

const BaseMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;