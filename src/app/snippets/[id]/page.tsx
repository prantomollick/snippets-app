import prisma from "@/db/db";
import delay from "delay";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

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

  const handleDeleteSnippetAction = actions.deleteAction.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h2 className="text-xl font-bold">{snippet.title}</h2>
        <div className="flex justify-center gap-4">
          <Link
            href={`/snippets/${params.id}/edit`}
            className="p-1 border rounded"
          >
            Edit
          </Link>
          <form action={handleDeleteSnippetAction}>
            <button type="submit" className="p-1 border rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <pre className="text-white font-mono">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default SnippetDetailspage;
