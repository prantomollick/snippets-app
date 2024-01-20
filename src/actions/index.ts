"use server";

import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  //   console.log(id, code);
  await prisma.snippet.update({
    where: { id },
    data: { code }
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteAction(id: number) {
  await prisma.snippet.delete({
    where: { id }
  });

  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // This needs tobe a server action!

    // Check the user's inputs and make sure they're valid
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer"
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer"
      };
    }

    // Create a new record in the database

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code
      }
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: `There was an error creating your snippet.`
      };
    }
  }

  revalidatePath("/");
  //Redirect the user back to the root route
  redirect("/");
}
