import prisma from "@/db/db";
import { Snippet } from "next/font/google";

export default async function Home() {
  const snippets = await prisma.snippet.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <h2 className="text-1xl font-semibold text-indigo-700 mb-1">
        {snippet.title}
      </h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <code className="text-white font-mono">{snippet.code}</code>
      </div>
    </div>
  ));

  return <div className="flex flex-col gap-4">{renderedSnippets}</div>;
}
