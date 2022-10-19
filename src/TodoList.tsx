import { useQuery } from "react-query";
import { client } from "./apis";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const { data: todoList } = useQuery(
    "todos",
    () => client.get<Todo[]>("/todos"),
    {
      suspense: true,
    }
  );

  return (
    <div>
      {todoList?.data.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
};

export default TodoList;
