import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import apiFetch from "../utils/apiFetch";
import { AUTH_LOGIN, AUTH_REGISTER } from "./statics";

interface IUserState {
  user: object;
  isLoading?: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
}

export const useAuthStore = create<IUserState>()(
  persist(
    (set) => ({
      user: {},
      login: async (username, password) => {
        try {
          set(() => ({ isLoading: true }));
          const fetchData = await apiFetch.post<object, object>(AUTH_LOGIN, {
            username,
            password,
          });

          set(() => ({
            isLoading: false,
            user: fetchData,
          }));
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
            user: fetchData,
          }));
        } catch (err) {
          set(() => ({ isLoading: false }));
        }
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
