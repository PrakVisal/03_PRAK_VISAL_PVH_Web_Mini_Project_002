"use server";

import { redirect } from "next/navigation";
import { auth, signIn } from "../auth";

export const loginAction = async (formData) => {
  const session = await auth();
  const email = formData.get("email");
  const password = formData.get("password");
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (session?.payload?.token) {
    redirect("/todo");
  } else {
    return "error";
  }
};
