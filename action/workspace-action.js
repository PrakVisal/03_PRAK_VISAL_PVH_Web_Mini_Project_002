"use server";
import { createWorkspace } from "../service/workplaces-service";

export const WorkspaceAction = async (_, formData) => {
  const name = formData.get("workspaceName");
  const data = await createWorkspace({ name });
  if (data?.status === "CREATED") {
    return {
      success: true,
      message: data?.message,
    };
  }
};
