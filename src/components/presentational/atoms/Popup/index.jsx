import PropTypes from "prop-types";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    position: fixed;
    top: 25px;
    margin-top: 4px;
    z-index: 40;
    padding: 5px;
    border: solid 1px #ddd;
    border-radius: 9999px;
    background: rgba(29, 155, 240, 0.1);
    font-weight: bold;
  }
`;
