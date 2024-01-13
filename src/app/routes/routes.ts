// Layouts
import PrivateLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";

// Pages
import Login from "@src/pages/login/Login";
import Register from "@src/pages/register/Register";
import Articles from "@src/pages/articles/Articles";
import Article from "@src/pages/articles/Article";

export const routes = [
  {
    layout: PublicLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/",
        isPublic: true,
        hasSiderLink: false,
      },
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: Register,
        path: "/register",
        isPublic: true,
      },
    ],
  },
  {
    layout: PrivateLayout,
    routes: [
      {
        name: "dashbaord",
        title: "Dashbaord page",
        component: Articles,
        path: "/dashboard",
        hasSiderLink: false,
      },
      {
        name: "articles",
        title: "Articles",
        hasSiderLink: true,
        component: Articles,
        path: "/articles",
      },
      {
        name: "add",
        title: "Add Article",
        hasSiderLink: true,
        component: Article,
        path: "/articles/new",
      },
      {
        name: "edit",
        title: "Edit Article",
        hasSiderLink: true,
        component: Article,
        path: "/articles/:id",
      },
    ],
  },
];
