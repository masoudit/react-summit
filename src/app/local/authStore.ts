/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import apiFetch from "../utils/apiFetch";
import { AUTH_LOGIN, AUTH_REGISTER } from "./statics";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IResponse {
  response: any;
}

interface IUser {
  success: any;
  data: any;
}
interface IUserState {
  user?: any;
  isLoading?: boolean;
  login: (username: string, password: string) => Promise<IResponse>;
  register: (
    username: string,
    password: string,
    confirmPassword: string,
  ) => Promise<IResponse>;
  logout: () => any;
}

export const useAuthStore = create<IUserState>()(
  persist(
    (set) => ({
      user: { data: undefined },
      login: async (username, password) => {
        try {
          set(() => ({ isLoading: true }));
          const fetchData = await apiFetch.post<object, IUser>(AUTH_LOGIN, {
            username,
            password,
          });

          set(() => ({
            isLoading: false,
            user: fetchData,
          }));
          if (fetchData?.success) {
            localStorage.setItem("token", fetchData.data.token);
          }
          return { response: fetchData };
        } catch (err) {
          set(() => ({ isLoading: false }));
        }
      },
      register: async (username, password) => {
        try {
          set(() => ({ isLoading: true }));
          const fetchData = await apiFetch.post<object, object>(AUTH_REGISTER, {
            username,
            password,
          });

          set(() => ({
            isLoading: false,
          }));
          return { response: fetchData };
        } catch (err) {
          set(() => ({ isLoading: false }));
        }
      },
      logout: () => {
        set(() => ({ user: undefined }));
        sessionStorage.clear(); // or localStorage.clear();
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
