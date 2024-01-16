import SnippetEditForm from "@/components/snippet-edit-form";
import prisma from "@/db/db";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}
export default async function SnippedEditPage({ params }: Props) {
  const id = parseInt(params.id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id
    }
  });

  if (!snippet) {
    return notFound();
  }

  console.log(snippet);

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
