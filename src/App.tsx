import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.less";
import { useAuthStore } from "./app/local/authStore";
import { useBearStore } from "./app/local/sampleStore";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { routes } from "./app/routes/routes";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  // const bears = useBearStore((state) => state.bears);
  // const increase = useBearStore((state) => state.increase);

  useEffect(() => {
    if (user?.data) {
      setIsAuthorized(true);
    }
  }, [user]);

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
