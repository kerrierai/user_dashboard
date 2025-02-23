// src/services/api.ts
export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const USERS_API = {
  BASE: `${API_BASE_URL}/users`,
  SEARCH: (query: string) => `${API_BASE_URL}/users?name_like=${query}`,
};

export const POSTS_API = {
  BASE: `${API_BASE_URL}/posts`,
  LIMIT: (limit: number) => `${API_BASE_URL}/posts?_limit=${limit}`,
};
