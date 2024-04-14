import { Keyword } from "@/types";

export const getKeywords = async () => {
  const response = await fetch(`http://localhost:3000/api/keyword`);

  if (!response.ok) {
    return { keywords: [] };
  }

  return (await response.json()) as { keywords: Keyword[] };
};
