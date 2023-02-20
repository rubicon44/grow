import { useState } from 'react';

export const Popup = ({ message, duration, showPopup }) => {
  const [visible, setVisible] = useState(true);

  const closePopup = () => {
    setVisible(false);
  };

  setTimeout(closePopup, duration);

  return showPopup && visible ? <div>{message}</div> : null;
};