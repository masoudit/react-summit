import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.less";
import { useAuthStore } from "./app/local/authStore";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { routes } from "./app/routes/routes";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ErrorPage from "./pages/error/ErrorPage";

const App: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [appLoading, setAppLoading] = useState(true);
  // const [isPublic, setIsPublic] = useState<boolean>(true);

  useEffect(() => {
    if (user?.data) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
    setAppLoading(false);
  }, [user]);

  return (
    <div>
      {!appLoading ? (
        <ReactRoutes>
          {routes.map(({ layout: Layout, routes: subRoutes }, index) => {
            return (
              <Route
                key={index}
                element={<Layout isAuthorized={isAuthorized} />}
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
          <Route path='*' element={<ErrorPage />} />
        </ReactRoutes>
      ) : (
        false
      )}
    </div>
  );
};

export default App;
