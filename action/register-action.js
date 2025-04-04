"use server";

import { redirect } from "next/navigation";
import { registerService } from "../service/register-service";

export const registerAction = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await registerService({ username, email, password });
  if (data) {
    return redirect("/login");
  } else {
    return redirect("/register");
  }
};
