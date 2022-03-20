import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageItems = JSON.parse(
    localStorage.getItem("LoginCredentials")
  );
  const [token, setToken] = useState(localStorageItems?.userToken);
  const [user, setUser] = useState(localStorageItems?.activeUser);
  const loginCall = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "LoginCredentials",
          JSON.stringify({
            userToken: response.data.encodedToken,
            activeUser: response.data.foundUser,
          })
        );
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <AuthContext.Provider value={{ loginCall, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };