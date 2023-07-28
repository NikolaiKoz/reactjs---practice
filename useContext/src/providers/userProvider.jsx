import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export const useUseContext = () => {
  return useContext(userContext);
};

export const useUserToggleContext = () => {
  return useContext(userToggleContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const cambiarLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Jose Luis Vallejos",
        email: "joseluisvallejos1995@gmail.com",
      });
    }
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiarLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
