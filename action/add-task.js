"use server";

import { revalidateTag } from "next/cache";
import { addNewTaskService } from "../service/task-service";

export const addNewTask = async (workspaceId, _, formData) => {
  console.log("workID:", workspaceId);
  console.log("FormData:", formData);
  const title = formData.get("title");
  const description = formData.get("description");
  const tag = formData.get("tag");
  const due = formData.get("dueDate");

  let errors = {};
  console.log("due:", due);
  if (!title.trim()) {
    errors.title = "Please fill the Title!";
  }
  if (!tag) {
    errors.tag = "Required a Tag!!!";
  }
  if (!due) {
    errors.due = "Date must fill";
  }
  // return errors;

  const data = await addNewTaskService({
    workspaceId,
    title,
    description,
    tag,
    due,
  });
  revalidateTag("task");
  return data;
};
