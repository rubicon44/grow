import { useContext } from "react";
import { AuthContext } from "../../../../../auth/AuthProvider";
import { useCurrentUserName } from "../../../../../hooks/useCurrentUserName";
import { useHeader } from "../../../../../hooks/useHeader";
import { useHeaderContext } from "../../../../../context/HeaderContext";
import { Header } from "../Header";

export const HeaderContainer = () => {
  const { headerLinksForAuth, pcHeaderLinks, spHeaderLinks } = useHeader();
  const { currentUserAuth } = useContext(AuthContext);
  const currentUserName = useCurrentUserName();
  const { clickedText, setClickedText } = useHeaderContext();
  return (
    <Header
      clickedText={clickedText}
      currentUserAuth={currentUserAuth}
      currentUserName={currentUserName}
      headerLinksForAuth={headerLinksForAuth}
      setClickedText={setClickedText}
      pcHeaderLinks={pcHeaderLinks}
      spHeaderLinks={spHeaderLinks}
    />
  );
};
