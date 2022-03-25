import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;

  > svg {
    cursor: pointer;
  }
`

export function BackButton() {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <BackButtonCover>
      <ArrowBackIosIcon onClick={handleBackButtonClick} />
    </BackButtonCover>
  )
}