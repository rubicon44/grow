import PropTypes from "prop-types";
import styled from "styled-components";

export const ConfirmationPopup = ({ message, onConfirm, onCancel }) => (
  <BackgroundDisAbledCover>
    <BackgroundDisAbled>
      <ButtonGroupText>{message}</ButtonGroupText>
      <ButtonGroup>
        <button type="button" onClick={onConfirm}>
          はい
        </button>
        <button type="button" onClick={onCancel}>
          いいえ
        </button>
      </ButtonGroup>
    </BackgroundDisAbled>
  </BackgroundDisAbledCover>
);

ConfirmationPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const BackgroundDisAbledCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  margin-top: 40%;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

const ButtonGroupText = styled.p`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
