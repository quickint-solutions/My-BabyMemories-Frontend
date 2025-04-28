import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export interface loginData {
  email: string;
  password: string;
}

export const loginHandler = async (data: loginData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/login`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export interface signupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export const signupHandler = async (data: signupData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/signup`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const fetchCurrentUserHandler = async (): Promise<any> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/user/me`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("accessToken")}`,
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    throw error?.response?.data;
  }
};
