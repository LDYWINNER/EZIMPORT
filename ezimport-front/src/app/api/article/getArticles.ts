import { Article } from "@/types";

export const getArticles = async () => {
  const response = await fetch(`http://localhost:3000/api/article`);

  if (!response.ok) {
    return { articles: [] };
  }

  return (await response.json()) as { articles: Article[] };
};
