import api from "./api";

export async function getAllTeachers() {
  const resp = await api.get("/teacher");

  return resp.data;
}

export async function getDisciplineTeacher(userId, usertype) {
  const resp = await api.get(`/discipline/${userId}/${usertype}`);

  return resp.data;
}

export async function createContent(id, title, description) {
  const resp = await api.post(`/content/${id}`, { title, description });
  return resp.data;
}

export async function getContent(id) {
  const resp = await api.get(`/content/${id}`);
  return resp.data;
}

export async function downloadPdf(id) {
  const route = `/pdfs/${id}`;
  const response = await api.get(route, {
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "blob",
    },
  });

  console.log(response);

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "disciplinas.pdf");
  document.body.appendChild(link);
  link.click();
}
