import React, { Suspense } from "react";
import {
  Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import history from "./History";
import { Home } from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";

const Routers = () => {
  return (
    <Routes>
      <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
    </Routes>
  );
};

export default Routers;