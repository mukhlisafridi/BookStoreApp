import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const getUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    getUser ? JSON.parse(getUser) : null
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
