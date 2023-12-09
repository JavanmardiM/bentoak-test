import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/general/loading";
import Layout from "./components/layout/main";
import AuthRoute from "./navigation/auth-route";
const Login = React.lazy(() => import("./pages/auth/login"));
const Register = React.lazy(() => import("./pages/auth/register"));
const NotFound = React.lazy(() => import("./pages/not-found"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route
            path="/"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          />
          <Route path="/dashboard/*" element={<Layout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
