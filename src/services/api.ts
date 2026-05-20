const API_URL = "https://localhost:7119/api";

export async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {

  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",

        ...(token
          ? {
              Authorization:
                `Bearer ${token}`,
            }
          : {}),

        ...(options?.headers || {}),
      },

      ...options,
    }
  );

  if (!res.ok) {
    const message = await res.text();
    throw new Error(
      message || "Error en la petición"
    );
  }
  if (res.status === 204) return undefined as T;
  return res.json();
}