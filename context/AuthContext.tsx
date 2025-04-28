import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  fetchCurrentUserHandler,
  loginHandler,
  signupHandler,
} from "@/api-handler/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Alert } from "react-native";
import { router } from "expo-router";

interface signupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface AuthContextType {
  user: any;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: signupData) => Promise<void>;
  logout: () => void;
  refetchUser: (reloadApp?: boolean) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { mutate: handleLogin } = useMutation({
    mutationFn: loginHandler,
    onSuccess: (data) => {
      const accessToken = data.token;
      const user = data.user;
      AsyncStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser(user);
    },
    onError: (error: any) => {
      Alert.alert("Login error:", error);
    },
  });
  const { mutate: handleSignup } = useMutation({
    mutationFn: signupHandler,
    onSuccess: (data) => {
      const accessToken = data.token;
      const user = data.user;
      AsyncStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser(user);
    },
    onError: (error: any) => {
      Alert.alert("Login error:", error);
    },
  });

  const { mutate: handleRefetchUser } = useMutation({
    mutationFn: fetchCurrentUserHandler,
    onSuccess: (data) => {
      if (!data || !data.success) {
        setIsLoading(false);
        setUser(null);
        return;
      }
      setUser(data.data);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });
  const login = async (email: string, password: string) => {
    await handleLogin({ email, password });
  };

  const signup = async (data: signupData) => {
    await handleSignup(data);
  };
  const logout = async () => {
    await AsyncStorage.removeItem("accessToken");
    axios.defaults.headers.common["Authorization"] = null;
    setUser(null);
  };

  const refetchUser = async (reloadApp?: boolean) => {
    if (reloadApp) {
      setIsLoading(true);
    }
    await handleRefetchUser();
  };

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");

      if (!accessToken) {
        setIsLoading(false);
        return;
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      handleRefetchUser();
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/welcome");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, signup, logout, refetchUser }}
    >
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
