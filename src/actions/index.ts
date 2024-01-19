"use server";

import prisma from "@/db/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  //   console.log(id, code);
  await prisma.snippet.update({
    where: { id },
    data: { code }
  });
  redirect(`/snippets/${id}`);
}

export async function deleteAction(id: number) {
  await prisma.snippet.delete({
    where: { id }
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: "Title must be longer"
  };

  // This needs tobe a server action!

  // Check the user's inputs and make sure they're valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  // Create a new record in the database

  const snippet = await prisma.snippet.create({
    data: {
      title,
      code
    }
  });
  console.log(snippet);

  //Redirect the user back to the root route
  redirect("/");
}
