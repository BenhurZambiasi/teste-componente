import api from "./api";

export async function createDiscipline(name, user, turno, numberStudents) {
  const resp = await api.post("/discipline", {
    name,
    user,
    turno,
    numberStudents,
  });
  return resp.data;
}

export async function getAllDisciplines() {
  const resp = await api.get("/content");
  return resp.data;
}

export async function deleteDiscipline(id) {
  const resp = await api.delete(`/discipline/${id}`);
  return resp;
}

export async function deleteContent(id) {
  const response = await api.delete(`/content/${id}`);
  return response.data;
}
