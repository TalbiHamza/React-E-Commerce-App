import apiClient from "../utils/api-client";

export const SuggestionApi = (search) => {
  return apiClient.get(`/products/suggestions?search=${search}`);
};
