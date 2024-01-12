import {
  AUTH_ACCOUNT,
  AUTH_LOGIN,
  AUTH_REGISTER,
  GET_ARTICLES,
} from "@src/app/local/statics";
import { HttpResponse, http } from "msw";

export const handlers = [
  http.post(AUTH_LOGIN, () => {
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
    console.log('Captured a "GET /posts" request');
  }),
  // http.post("/api/posts", () => {
  //   console.log('Captured a "POST /posts" request');
  // }),
  // http.delete("/api/posts/:id", ({ params }) => {
  //   console.log(`Captured a "DELETE /posts/${params.id}" request`);
  // }),
];
