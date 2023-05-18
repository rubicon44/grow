import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// todo: アニメーションをつけて、popup表示をもっと目立たせたい。
export const Popup = ({ message, showPopup }) => {
  // todo: state位置検証
  const [visible, setVisible] = useState(true);

  const closePopup = () => {
    setVisible(false);
  };

  setTimeout(closePopup, 3000);

  return showPopup && visible ? (
    <Message>
      <p>{message}</p>
    </Message>
  ) : null;
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  showPopup: PropTypes.bool.isRequired,
};

const Message = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-top: 4px;

  > p {
    padding: 5px;
    border: solid 1px #ddd;
    border-radius: 9999px;
    background: #fff;
    font-weight: bold;
  }
`;
