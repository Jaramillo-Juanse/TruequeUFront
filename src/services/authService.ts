import { request } from "./api";

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

interface MeResponse {
  userId: string;
  email?: string;
  name?: string;
}

// ======================
// LOGIN
// ======================
export function login(data: LoginData) {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ======================
// REGISTER
// ======================
export function register(data: LoginData) {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ======================
// GET CURRENT USER
// ======================
export function getMe() {
  const token = localStorage.getItem("token");

  return request<MeResponse>("/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}