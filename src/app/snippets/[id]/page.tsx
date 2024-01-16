import prisma from "@/db/db";
import delay from "delay";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
async function SnippetDetailspage({ params }: Props) {
  // const snippetId: number = parseInt(params.id!);
  await delay(1000);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!snippet) notFound();

  console.log(snippet);

  return (
    <div>
      <h2>{snippet.title}</h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <code className="text-white font-mono">{snippet.code}</code>
      </div>
    </div>
  );
}

export default SnippetDetailspage;
