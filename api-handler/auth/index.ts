import axios from "axios";

export interface loginData {
  email: string;
  password: string;
}
export const loginHandler = async (data: loginData) => {
  console.log("loginHandler data -> ", data);
  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/api/auth/login`,
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
      `${process.env.BACKEND_URL}/api/auth/signup`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
