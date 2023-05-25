import { useCurrentUserName } from "../../../../../hooks/useCurrentUserName";
import { useHeader } from "../../../../../hooks/useHeader";
import { useHeaderContext } from "../../../../../context/HeaderContext";
import { Header } from "../Header";

export const HeaderContainer = ({ currentUserAuth }) => {
  const { headerLinksForAuth, pcHeaderLinks, spHeaderLinks } = useHeader();
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
