import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const BackArrow = () => {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate(-1);
  };

  return (
    <BackArrowCover>
      <ArrowBackIosIcon onClick={handleBackArrowClick} />
    </BackArrowCover>
  );
};

const BackArrowCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 45px;
  height: 30px;
  > svg {
    cursor: pointer;
  }
`;