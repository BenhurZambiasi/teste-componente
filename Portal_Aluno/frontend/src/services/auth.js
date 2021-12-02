import api from "./api";

export async function authenticate(email, password) {
  try {
    const response = await api.post("/sessions", { email, password });
    return response.data;
  } catch (error) {
    console.log("erro", error);
    return error;
  }
}

export async function forgot_password(email) {
  try {
    const response = await api.post("/sessions/forgot", { email });
    return response.data;
  } catch (error) {
    return error;
  }
}
