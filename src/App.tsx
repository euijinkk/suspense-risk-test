import { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AfterEachSuspense from "./After-EachSuspense";
import AfterSameSuspense from "./After-SameSuspense";
import After_useQueries from "./After-useQueries";
import Before from "./Before";

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
        <Link to="/after-use-queries">
          1 Queries in 1 Component, wrapped with a Suspense
        </Link>
      </nav>
      <h1>Suspense Test</h1>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/before" element={<Before />} />
          <Route path="/after-same-suspense" element={<AfterSameSuspense />} />
          <Route path="/after-each-suspense" element={<AfterEachSuspense />} />
          <Route path="/after-use-queries" element={<After_useQueries />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
