import { auth } from "../auth";

export async function TaskService(taskId) {
  const session = await auth();
  console.log("sees", session);
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/tasks/workspace/${taskId}?pageNo=0&pageSize=20&sortBy=taskId&sortDirection=ASC`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      next: {
        tags: ["task"],
      },
    }
  );
  const getAll = await res.json();
  const data = await getAll.payload;
  return data;
}

export async function addNewTaskService({
  workspaceId,
  title,
  tag,
  due,
  description,
}) {
  const session = await auth();
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/workspace/${workspaceId.workspaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      body: JSON.stringify({
        taskTitle: title,
        taskDetails: description,
        tag: tag,
        endDate: due,
      }),
    }
  );

  const getAll = await res.json();
  // console.log("getData:", data, getAll);
  return getAll;
}

export async function updateProgress({ status }) {
  const session = await auth();
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/acfb6066-87d4-4bb4-92db-af6a346aae33/workspace/03a766b9-5aaf-41a4-9311-ec04d161c96a/status?status=${status}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session?.payload?.token}`,
      },
    }
  );
  const getAll = await res.json();
  // const data = await getAll.payload;
  console.log("daaaataaaa:", getAll);
  return getAll;
}
