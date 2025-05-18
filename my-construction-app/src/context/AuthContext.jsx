// import React, { createContext, useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Load auth data from localStorage on app start
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//       console.log("✅ Auth loaded from localStorage");
//     } else {
//       console.log("⚠️ No auth data found in localStorage");
//     }
//   }, []);

//   // Login and store token + user
//   const login = useCallback((newToken, userData) => {
//     localStorage.setItem("token", newToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setToken(newToken);
//     setUser(userData);
//   }, []);

//   // Logout and clear auth
//   const logout = useCallback(() => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setToken(null);
//     setUser(null);
//     navigate("/login");
//   }, [navigate]);

//   const isAuthenticated = !!token && !!user;

//   return (
//     <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;



import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load auth data from localStorage on app start
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      console.log("✅ Auth loaded from localStorage");
    } else {
      console.log("⚠️ No auth data found in localStorage");
    }
  }, []);

  // Login and store token + user
  const login = useCallback((newToken, userData) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  }, []);

  // Logout and clear auth
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/login");
  }, [navigate]);

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add this hook for easy access
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
