"use client";
import type { Snippet } from "@prisma/client";
import { Editor, OnChange } from "@monaco-editor/react";
import { useState } from "react";

interface SnippedEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippedEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false }
        }}
      />
    </div>
  );
}
