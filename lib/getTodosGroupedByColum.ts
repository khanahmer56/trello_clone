import { database } from "@/appwrite";
export const getTodosGroupedByColum = async () => {
  const data = await database.listDocuments(
    `64764108a04bc7675d58`,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );
  const todos = data.documents;
  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, { id: todo.status, todos: [] });
    }
    acc.get(todo.status)?.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
  }, new Map<TypeColumn, Column>());
  const columnTypes: TypeColumn[] = ["todo", "inprogress", "done"];
  for (const columType of columnTypes) {
    if (!columns.get(columType)) {
      columns.set(columType, { id: columType, todos: [] });
    }
  }
  const sortedColumn = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );
  console.log(sortedColumn);
  const board: Board = {
    columns: sortedColumn,
  };
  return board;
};
