import { auth } from "../auth";

export async function getAllWorkplacesService() {
  const session = await auth();

  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${session?.payload?.token}` },
    }
  );
  const getAll = await res.json();
  return await getAll.payload;
}
export async function getWorkspaceById(id) {
  const session = await auth();

  const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${session?.payload?.token}` },
  });
  const getAll = await res.json();
  return await getAll.payload;
}

export async function createWorkspace({ name }) {
  const session = await auth();
  const res = await fetch("http://96.9.81.187:8080/api/v1/workspace", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.payload?.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      workspaceName: name,
    }),
  });
  const data = res.json();
  return data;
}
