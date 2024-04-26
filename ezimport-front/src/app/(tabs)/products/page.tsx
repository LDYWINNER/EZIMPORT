import Link from "next/link";
import { Separator } from "@/components/ui/separator";

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return boards;
}

export const boards = [
  {
    id: "ople",
    name: "오플",
  },
  { id: "iherb", name: "아이허브" },
  { id: "rakuten", name: "Rakuten" },
];

export default async function Products() {
  const products = await getProducts();

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
          <>
            <Link href={`/products/${board.id}`} key={index}>
              <div className="h-[175px] w-[250px] rounded-xl bg-neutral-600">
                <h3>{board.name}</h3>
              </div>
            </Link>
            <Separator orientation="vertical" />
          </>
        ))}
      </div>
    </>
  );
}
