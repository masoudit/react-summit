/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import apiFetch from "../utils/apiFetch";
import { CREATE_ARTICLE, DELETE_ARTICLE, GET_ARTICLES } from "./statics";
import { IArticle } from "../models/articleModal";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IResponse {
  response: any;
}

interface IUser {
  success: any;
  data: any;
}
interface IArticleState {
  articles?: any;
  isLoading?: boolean;
  getList: () => Promise<IResponse>;
  delete: (postId: string) => Promise<IResponse>;
  create: (data: IArticle) => Promise<IResponse>;
  update: (data: IArticle) => Promise<IResponse>;
}

export const useArticleStore = create<IArticleState>()((set) => ({
  user: { data: undefined },
  getList: async () => {
    try {
      set(() => ({ isLoading: true }));
      const fetchData = await apiFetch.get<IUser>(GET_ARTICLES, {});

      set(() => ({
        isLoading: false,
        articles: fetchData,
      }));

      return { response: fetchData };
    } catch (err) {
      set(() => ({ isLoading: false }));
    }
  },
  delete: async (postId) => {
    try {
      set(() => ({ isLoading: true }));
      const fetchData = await apiFetch.post<object, object>(DELETE_ARTICLE, {
        postId,
      });

      set(() => ({
        isLoading: false,
      }));

      return { response: fetchData };
    } catch (err) {
      set(() => ({ isLoading: false }));
    }
  },
  create: async (data) => {
    try {
      set(() => ({ isLoading: true }));
      const fetchData = await apiFetch.post<object, object>(CREATE_ARTICLE, {
        data,
      });

      set(() => ({
        isLoading: false,
      }));

      return { response: fetchData };
    } catch (err) {
      set(() => ({ isLoading: false }));
    }
  },
  update: async (data) => {
    try {
      set(() => ({ isLoading: true }));
      const fetchData = await apiFetch.post<object, object>(CREATE_ARTICLE, {
        data,
      });

      set(() => ({
        isLoading: false,
      }));

      return { response: fetchData };
    } catch (err) {
      set(() => ({ isLoading: false }));
    }
  },
}));
