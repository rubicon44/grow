import { useEffect, useState } from "react";
import { useSignOut } from "../useSignOut";

export const useLogOutConfirmation = () => {
  const { handleSignout } = useSignOut();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    if (showLogoutConfirmation) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
      return () => {
        document.body.style.overflow = "visible";
      };
    }
    return () => {};
  }, [showLogoutConfirmation]);

  const handleLogout = () => {
    if (showLogoutConfirmation) {
      handleSignout();
    }
  };

  const handleShowLogoutConfirmation = () => {
    setShowLogoutConfirmation(true);
  };

  const revertLogOutConfirmation = () => {
    setShowLogoutConfirmation(false);
  };

  return {
    handleLogout,
    handleShowLogoutConfirmation,
    showLogoutConfirmation,
    revertLogOutConfirmation,
  };
};
