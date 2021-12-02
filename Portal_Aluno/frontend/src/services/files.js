import api from " services/api";

export async function getImage() {
  const resp = await api.get("/filebase");

  return resp.data;
}
