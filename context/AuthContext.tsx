import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginHandler, signupHandler } from "@/api-handler/auth";

interface AuthContextType {
  user: any;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext < AuthContextType | undefined > (undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState < any > (null);
  const [token, setToken] = useState < string | null > (null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadUser = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser && storedToken) {
        // setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
      setIsLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await loginHandler({ email, password });
    await AsyncStorage.setItem("token", res.token);
    await AsyncStorage.setItem("user", JSON.stringify(res.user));
    setUser(res.user);
    setToken(res.token);
  };
  const signup = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const res = await signupHandler({ firstName, lastName, email, password });
    await AsyncStorage.setItem("user", JSON.stringify(res.user));
    await AsyncStorage.setItem("token", res.token);
    setUser(res.user);
    setToken(res.token);
    return res;
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
