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
