interface Props {
  params: {
    id: string;
  };
}

export default function SnippedEditPage({ params }: Props) {
  const id = parseInt(params.id);
  return <div>Editing Snippet with id {id}</div>;
}
