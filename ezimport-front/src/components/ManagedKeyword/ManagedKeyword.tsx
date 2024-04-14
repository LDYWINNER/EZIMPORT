"use client";

import { getKeywords } from "@/app/api/keyword/getKeywords";
import { Keyword } from "@/types";
import { useEffect, useState } from "react";

function ManagedKeyword() {
  const [data, setData] = useState<Keyword[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { keywords } = await getKeywords();
      setData(keywords);
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 font-semibold text-gray-800 px-4">
      <div className="text-lg mb-3 ">등록된 키워드</div>
      <div className="flex gap-x-2">
        {data &&
          data.map((keyword) => (
            <div key={keyword.keyword}>{keyword.keyword}</div>
          ))}
      </div>
    </div>
  );
}

export default ManagedKeyword;
