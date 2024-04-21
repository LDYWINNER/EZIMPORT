"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("system");
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between min-h-screen p-6"
      )}
    >
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">😄</span>
        <div className="flex">
          <h1 className="text-4xl ">EzImport</h1>
        </div>
        <h2 className="text-2xl">EzImport에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
