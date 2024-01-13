import {
  AUTH_ACCOUNT,
  AUTH_LOGIN,
  AUTH_REGISTER,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLES,
  UPDATE_ARTICLE,
} from "@src/app/local/statics";
import { HttpResponse, http } from "msw";
import articlesMockData from "./articles-mock.json";

export const handlers = [
  http.post(AUTH_LOGIN, async ({ request }) => {
    const ud = await request.json();
    const x = JSON.parse(JSON.stringify(ud));
    // only this user valid
    if (x?.username === "demo@masoudit.com" && x?.password === "demMo@123") {
      return HttpResponse.json({
        data: {
          user: {
            id: "123",
            name: "MasoudIt",
          },
          token: "BAnRW303S/wiS6NwMsklJClU9J3+42zo",
        },
        success: true,
      });
    } else {
      return HttpResponse.json({
        data: null,
        errorMessage: "Email or Password Is Invalid!",
        success: false,
      });
    }
  }),
  http.post(AUTH_REGISTER, () => {
    return HttpResponse.json({
      data: {
        user: {
          id: "123",
          name: "John Maverick",
        },
        token: "BAnRW303S/wiS6NwMsklJClU9J3+42zo",
      },
      success: true,
    });
  }),
  http.get(AUTH_ACCOUNT, () => {
    return HttpResponse.json({
      data: {
        user: {
          id: "123",
          name: "John Maverick",
          phone: "077129912",
          gender: "male",
        },
      },
      success: true,
    });
  }),
  http.get(GET_ARTICLES, () => {
    return HttpResponse.json({
      data: {
        articles: articlesMockData,
      },
      success: true,
    });
  }),
  http.post(CREATE_ARTICLE, async ({ request }) => {
    const ud = await request.json();
    console.log("Captured request data", ud);

    return HttpResponse.json({
      data: {
        id: 501,
      },
      success: true,
    });
  }),
  http.delete(DELETE_ARTICLE, ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
  http.post(UPDATE_ARTICLE, async ({ params, request }) => {
    const ud = await request.json();
    console.log("Captured request data", ud);
    console.log(`Captured a "Update /posts/${params.id}" request`);
  }),
  // http.post("/api/posts", () => {
  //   console.log('Captured a "POST /posts" request');
  // }),
  // http.delete("/api/posts/:id", ({ params }) => {
  //   console.log(`Captured a "DELETE /posts/${params.id}" request`);
  // }),
];
