import { loginHandler, signupHandler } from "@/api-handler/auth";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContext {
  user: any | null;
  authLoading: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  //   resetPassword: (email: string) => Promise<void>;
  //   refetchUser: (reloadApp?: boolean) => Promise<void>;
}

interface IAuthContextProvider {
  children: React.ReactNode;
  isSecureRoute?: boolean;
  isPublicRoute?: boolean;
  isAuthRoute?: boolean;
}

const defaultProvider: IAuthContext = {
  user: null,
  authLoading: true,
  logout: async () => {},
  login: async () => {},
  signup: async () => {},
  //   resetPassword: async () => {},
  //   refetchUser: async () => {},
};

const AuthContext = createContext<IAuthContext>(defaultProvider);

export default function AuthProvider(props: IAuthContextProvider) {
  const router = useRouter();
  const [user, setUser] = useState<null | any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const { mutate: handleSignup } = useMutation({
    mutationFn: signupHandler,
    onSuccess: async (data: any) => {
      const accessToken = data.data.token;
      const user = data.data;
      await AsyncStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser(user);
      router.push("/dashboard");
    },
    onError: (error: any) => {},
  });

  const { mutate: handleLogin } = useMutation({
    mutationFn: loginHandler,
    onSuccess: async (data: any) => {
      const accessToken = data.data.token;
      const user = data.data;

      await AsyncStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setUser(user);
      router.push("/dashboard");
    },
    onError: (error: any) => {},
  });

  //   const { mutateAsync: handleRefetchUser } = useMutation(
  //     fetchCurrentUserHandler,
  //     {
  //       onSuccess: (data: ApiResponse) => {
  //         if (!data.success) {
  //           setAuthLoading(false);
  //           return;
  //         }
  //         setUser(data.data);
  //         setAuthLoading(false);
  //       },
  //     }
  //   );

  const signup = async (data: any) => {
    await handleSignup(data);
  };
  const login = async (email: string, password: string) => {
    await handleLogin({ email, password });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("accessToken");
    axios.defaults.headers.common["Authorization"] = "";
    setUser(null);
  };
  //   const refetchUser = async (reloadApp?: boolean) => {
  //     if (reloadApp) {
  //       setAuthLoading(true);
  //     }
  //     await handleRefetchUser();
  //   };

  //   const resetPassword = async (email: string) => {
  //     await handleResetPassword(email);
  //   };

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (!accessToken) {
        setAuthLoading(false);
        return;
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      // handleRefetchUser();
    };
    fetchToken();
  }, []);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authLoading,
        logout,
        login,
        signup,
        // refetchUser,
        // resetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
