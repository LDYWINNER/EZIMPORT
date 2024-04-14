"use client";

import { useEffect, useState } from "react";
import ArticleItem from "../Common/ArticleItem";
import { getArticles } from "@/app/api/article/getArticles";
import { Article } from "@/types";

function ArticleList() {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { articles } = await getArticles();
      setData(articles);
    };

    fetchData();
  }, []);

  return (
    <div className="px-4">
      {data &&
        data.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
    </div>
  );
}

export default ArticleList;
