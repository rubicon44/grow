import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useCurrentPath } from "../../hooks/useCurrentPath";

const HeaderContext = createContext();

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderContextProvider = ({ children }) => {
  const { currentPath } = useCurrentPath();
  const [clickedText, setClickedText] = useState(currentPath);

  const value = useMemo(
    () => ({
      clickedText,
      setClickedText,
    }),
    [clickedText, setClickedText]
  );

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

HeaderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
