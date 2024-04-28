import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export const boards = [
  {
    id: "ople",
    name: "Ople.com",
  },
  { id: "iherb", name: "아이허브" },
  { id: "rakuten", name: "라쿠텐" },
];

export default async function Products() {
  return (
    <>
      <div className="flex items-center mt-3">
        <h1 className="text-lg font-semibold md:text-2xl">
          크롤링 기능 제공 웹사이트 목록
        </h1>
      </div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-3">
        {boards.map((board, index) => (
          <div key={index}>
            <Link href={`/websites/urls`}>
              <div className="flex gap-5">
                <Button className="h-[175px] w-[250px] rounded-xl text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <h3 className="">{board.name}</h3>
                </Button>
                <div className="*:text-white mt-1">
                  <h3>마지막 업데이트: 2023-07-12 10:42 AM</h3>
                  <ul>
                    <li>크롤링 속도 개선</li>
                    <li>{formatPrice(9999)}</li>
                  </ul>
                  <h3>크롤링 가능 항목</h3>
                  <ul>
                    <li>유산균</li>
                    <li>아동 항목</li>
                  </ul>
                </div>
              </div>
            </Link>
            <Separator className="mt-3" />
          </div>
        ))}
      </div>
    </>
  );
}
