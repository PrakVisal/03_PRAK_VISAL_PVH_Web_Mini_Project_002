import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../auth";

export default async function page() {
  const session = await auth();
  if (session?.payload?.token) {
    return redirect("/todo/2b6398cb-5776-4852-b549-9da67f8aa6cd");
  } else {
    return redirect("/register");
  }
}
