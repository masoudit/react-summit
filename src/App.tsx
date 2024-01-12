import React, { useEffect } from "react";
import "./App.css";
import "./App.less";
import { useAuthStore } from "./app/local/authStore";
import { useBearStore } from "./app/local/sampleStore";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { routes } from "./app/routes/routes";

const App: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  const onSubmit = async () => {
    // const response = await fetch("/api/login");
    login("test", "test1");
  };

  const isAuthorized = true;
  const isPublic = false;

  return (
    <div>
      <ReactRoutes>
        {routes.map(({ layout: Layout, routes: subRoutes }, index) => {
          return (
            <Route
              key={index}
              element={
                <Layout isAuthorized={isAuthorized} isPublic={isPublic} />
              }
            >
              {subRoutes.map(({ component: Component, path, name }) => {
                return (
                  Component &&
                  path && (
                    <Route key={name} element={<Component />} path={path} />
                  )
                );
              })}
            </Route>
          );
        })}
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </ReactRoutes>
    </div>
  );
};

export default App;
