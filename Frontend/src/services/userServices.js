import apiClient from "../utils/api-client";
import { jwtDecode } from "jwt-decode";

const token = "token";

export const signup = async (user, profile) => {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  const response = await apiClient.post("/user/signup", body);
  localStorage.setItem("token", response.data.token);
};

export async function signin(user) {
  const res = await apiClient.post("/user/login", user);
  localStorage.setItem(token, res.data.token);
}

export function logOut() {
  localStorage.removeItem(token);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem(token);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export const getJwt = () => {
  return localStorage.getItem(token);
};
