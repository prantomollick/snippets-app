import prisma from "@/db/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  const renderedSnippets = snippets.map((snippet) => (
    <div
      key={snippet.id}
      className="flex justify-between items-center p-2 border rounded-md"
    >
      <h3 className="text-1xl font-medium text-indigo-700">{snippet.title}</h3>
      <Link href={`/snippets/${snippet.id}`}>View</Link>
    </div>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h2 className="text-xl font-bold">Snippets</h2>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
