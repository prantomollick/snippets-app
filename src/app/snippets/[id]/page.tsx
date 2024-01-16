import prisma from "@/db/db";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
async function SnippetDetailspage({ params }: Props) {
  // const snippetId: number = parseInt(params.id!);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!snippet) notFound();

  console.log(snippet);

  return <div>SnippetDetailspage</div>;
}

export default SnippetDetailspage;
