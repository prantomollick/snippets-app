"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

function SnippetCreatePage() {
  const [formState, formAction] = useFormState(actions.createSnippet, {
    message: ""
  });

  return (
    <form action={formAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          ></textarea>
        </div>
        <div>{formState.message}</div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
