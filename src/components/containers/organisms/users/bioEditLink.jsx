import React from 'react';
import styled from 'styled-components';

export const BioEditLink = ({ setBioAbleFunc }) => {
  return (
    <BioChangeLinkCover>
      <BioChangeLink onClick={setBioAbleFunc}>
        <span>プロフィールを編集</span>
      </BioChangeLink>
    </BioChangeLinkCover>
  )
};

const BioChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BioChangeLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
`;