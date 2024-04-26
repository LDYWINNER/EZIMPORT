import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function SkeletonCard() {
  return (
    <>
      <div className="flex items-center mt-3">
        <h1 className="text-lg font-semibold md:text-2xl">
          크롤링 기능 제공 웹사이트 목록
        </h1>
      </div>
      <Separator className="my-3" />
      <div className="flex gap-3">
        {[...Array(3)].map((_, index) => (
          <>
            <div key={index}>
              <Skeleton className="h-[175px] w-[250px] rounded-xl" />
            </div>
            <Separator orientation="vertical" />
          </>
        ))}
      </div>
    </>
  );
}
