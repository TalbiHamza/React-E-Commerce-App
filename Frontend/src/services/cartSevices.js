import apiClient from "../utils/api-client";

export const addToCartApi = (id, quantity) => {
  return apiClient.post(`/cart/${id}`, { quantity: quantity });
};

export const getCartApi = () => {
  return apiClient.get("/cart");
};

export const RemoveFromCartApi = (id) => {
  return apiClient.patch(`/cart/remove/${id}`);
};

export const IncreaseApi = (id) => {
  return apiClient.patch(`/cart/increase/${id}`);
};

export const DecreaseApi = (id) => {
  return apiClient.patch(`/cart/decrease/${id}`);
};
