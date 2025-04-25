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
  console.log("signupHandler data:", data);
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
