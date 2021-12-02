import api from "./api";

export async function getAllStudents() {
  const resp = await api.get("/students");

  return resp.data;
}
