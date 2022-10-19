import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Before = lazy(() => import("./Before"));
const AfterSameSuspense = lazy(() => import("./After-SameSuspense"));
const AfterEachSuspense = lazy(() => import("./After-EachSuspense"));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/before">
          2 Query in 1 Component, wrapped with a Suspense
        </Link>
        <Link to="/after-same-suspense">
          1 Query in 1 Component, wrapped with a Suspense
        </Link>
        <Link to="/after-each-suspense">
          1 Query in 1 Component, wrapped with each Suspense
        </Link>
      </nav>
      <h1>Suspense Test</h1>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/before" element={<Before />} />
          <Route path="/after-same-suspense" element={<AfterSameSuspense />} />
          <Route path="/after-each-suspense" element={<AfterEachSuspense />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
