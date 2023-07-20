import formatTodos from "./formatTodos";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodos(board);
  console.log(todos, "dsdff");
  const response = await fetch("/api/createSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify({ todos: todos }),
  });

  const gptdata = await response.json();
  const { content } = gptdata;
  console.log(content, "content");

  return content;
};
export default fetchSuggestion;
