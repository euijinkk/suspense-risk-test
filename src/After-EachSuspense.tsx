import { Suspense } from "react";
import TodoList from "./TodoList";
import PostList from "./PostList";

function AfterEachSuspense() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <section style={{ width: "50%" }}>
          <h2>Todo List</h2>
          <Suspense fallback={<div>...loading</div>}>
            <TodoList />
          </Suspense>
        </section>
        <section style={{ width: "50%" }}>
          <h2>Post List</h2>
          <Suspense fallback={<div>...loading</div>}>
            <PostList />
          </Suspense>
        </section>
      </div>
    </div>
  );
}

export default AfterEachSuspense;
