import { useQuery } from "react-query";
import { client } from "./apis";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

function Test() {
  const { data: todoList } = useQuery(
    "todos",
    () => client.get<Todo[]>("/todos"),
    { suspense: true }
  );

  return (
    <div style={{ display: "flex" }}>
      <section>
        <h2>Todo List</h2>
        {todoList?.data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </section>
    </div>
  );
}

export default Test;
