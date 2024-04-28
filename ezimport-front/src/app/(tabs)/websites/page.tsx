import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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
      <div className="flex gap-3">
        {boards.map((board, index) => (
          <div key={index} className="flex">
            <Link href={`/websites/products`}>
              <Button className="h-[175px] w-[250px] rounded-xl text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <h3 className="">{board.name}</h3>
              </Button>
            </Link>
            <Separator orientation="vertical" />
          </div>
        ))}
      </div>
    </>
  );
}
