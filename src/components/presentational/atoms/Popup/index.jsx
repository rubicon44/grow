import PropTypes from "prop-types";
import styled from "styled-components";

// todo: アニメーションをつけて、popup表示をもっと目立たせたい。
export const Popup = ({ message, showPopup, visible }) =>
  showPopup && visible ? (
    <Message>
      <p>{message}</p>
    </Message>
  ) : null;

Popup.defaultProps = {
  visible: null,
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  showPopup: PropTypes.bool.isRequired,
  visible: PropTypes.bool,
};

const Message = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4px;

  > p {
    padding: 5px;
    border: solid 1px #ddd;
    border-radius: 9999px;
    background: rgba(29, 155, 240, 0.1);
    font-weight: bold;
  }
`;
