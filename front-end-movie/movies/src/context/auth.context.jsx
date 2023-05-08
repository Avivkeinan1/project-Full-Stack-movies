import { useState } from "react";
import { useContext, createContext } from "react";
import userService from "../services/userServices";

const authContext = createContext(null);
authContext.displayName = "auth context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());
  const refreshUser = () => {
    setUser(userService.getUser());
  };
  const createUser = (user) => {
    return userService.createUser(user);
  };
  const login = async (credentials) => {
    const response = await userService.loginUser(credentials);
    refreshUser();
    return response;
  };
  const logOut = () => {
    userService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ createUser, login, logOut, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
