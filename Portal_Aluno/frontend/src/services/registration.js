import api from "./api";

export async function registration(cpf, disciplines) {
  const resp = await api.post(`/registration/${cpf}`, { disciplines });

  return resp.data;
}
