import { Container } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../navigation/private-route";
import routes from "../../navigation/routes";
import Loading from "../../components/general/loading";
import MenuAppBar from "./header";

const Main = () => {
  return (
    <>
      <div id="container">
        <MenuAppBar />
        <main>
          <Container maxWidth="xl">
            <Suspense fallback={<Loading />}>
              <Routes>
                {routes.map((route, idx) => {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        element={
                          route.isPrivate ? (
                            <PrivateRoute>
                              <route.component />
                            </PrivateRoute>
                          ) : (
                            <route.component />
                          )
                        }
                      />
                    )
                  );
                })}
              </Routes>
            </Suspense>
          </Container>
        </main>
      </div>
    </>
  );
};
export default Main;
