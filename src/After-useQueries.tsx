import { useQueries } from "react-query";
import { client } from "./apis";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

function After_useQueries() {
  const [{ data: todoList }, { data: postList }] = useQueries([
    {
      queryKey: ["todo"],
      queryFn: () => client.get<Todo[]>("/todos"),
      suspense: true,
    },
    {
      queryKey: ["post"],
      queryFn: () => client.get<Post[]>("/posts"),
      suspense: true,
    },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <section style={{ width: "50%" }}>
        <h2>Todo List</h2>
        {todoList?.data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
      <section style={{ width: "50%" }}>
        <h2>Post List</h2>
        {postList?.data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
    </div>
  );
}

export default After_useQueries;
