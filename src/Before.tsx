import { useQuery } from "react-query";
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

function Before() {
  const { data: todoList } = useQuery(
    "todos",
    () => client.get<Todo[]>("/todos"),
    {
      suspense: true,
    }
  );

  const { data: postList } = useQuery(
    "posts",
    () => client.get<Post[]>("/posts"),
    {
      suspense: true,
    }
  );

  return (
    <div style={{ display: "flex" }}>
      <section>
        <h2>Todo List</h2>
        {todoList?.data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
      <section>
        <h2>Post List</h2>
        {postList?.data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
    </div>
  );
}

export default Before;
