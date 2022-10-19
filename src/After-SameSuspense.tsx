import { Suspense } from "react";
import TodoList from "./TodoList";
import PostList from "./PostList";

function AfterSameSuspense() {
  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>
        <div style={{ display: "flex" }}>
          <section style={{ width: "50%" }}>
            <h2>Todo List</h2>
            <TodoList />
          </section>
          <section style={{ width: "50%" }}>
            <h2>Post List</h2>
            <PostList />
          </section>
        </div>
      </Suspense>
    </div>
  );
}

export default AfterSameSuspense;
