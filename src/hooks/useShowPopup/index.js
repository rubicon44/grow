import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useShowPopup = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(true);

  const closePopup = () => {
    setVisible(false);
  };

  setTimeout(closePopup, 3000);

  useEffect(() => {
    if (location.state && location.state.showPopup) {
      setShowPopup(location.state.showPopup);
      // Clear location state to prevent the popup from being displayed again
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  return { showPopup, visible };
};
