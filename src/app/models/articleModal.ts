export interface IArticle {
  id?: number;
  title: string;
  author: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  description?: string;
  tags?: string[];
}
