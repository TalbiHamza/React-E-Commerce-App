import apiClient from "../utils/api-client";

export const checkOutApi = (id, quantity) => {
  return apiClient.post("/order/checkout");
};
