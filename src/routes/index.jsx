import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "./Loading";

const Home = lazy(() => import("../screens/Home"));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
}
