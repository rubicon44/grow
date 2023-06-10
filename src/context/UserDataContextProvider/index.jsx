import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserDataContext = createContext();

export const useUserDataContext = () => useContext(UserDataContext);

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const value = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData]
  );

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

UserDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
