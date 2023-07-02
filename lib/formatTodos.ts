const formatTodos = (board: Board) => {
  const todos = Array.from(board.columns.entries());
  const flatarray = todos.reduce(
    (acc, [key, value]) => {
      acc[key] = value.todos;

      return acc;
    },
    {} as {
      [key in TypeColumn]: Todo[];
    }
  );

  const flatArayCounted = Object.entries(flatarray).reduce(
    (acc, [key, value]) => {
      acc[key as TypeColumn] = value.length;
      return acc;
    },
    {} as {
      [key in TypeColumn]: number;
    }
  );
  return flatArayCounted;
};
export default formatTodos;
