import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  ChevronDownIcon,
  File,
  MoreHorizontal,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default async function Urls() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/websites">크롤링 기능 제공 웹사이트 목록</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/websites/urls">크롤링 url 설정</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>오플</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 ml-1">
              Ople.com
            </h1>
            <Link href={"https://www.ople.com/mall5/"}>사이트 방문하기</Link>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button size="sm">
                <PlusCircle className="h-3.5 w-3.5 mr-2" />
                크롤링 하기
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle className="mb-3">크롤링 설정하기</CardTitle>
                  <CardDescription>
                    마지막 크롤링 날짜: 2023-07-12 10:42 AM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">
                        크롤링 파일 이름 설정하기 ([설정한 이름]_[날짜 ex.
                        04-28]_[시간 ex. 1303].xlsx 형태로 다운로드)
                      </Label>
                      <Input id="name" type="text" className="w-full" />
                    </div>
                    <div>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="link" className="-ml-4">
                            크롤링할 url 수동으로 입력하기 (한 줄에 하나의 url
                            입력)
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-120">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">예시</h4>
                              <p className="text-sm">
                                https://www.ople.com/mall5/shop/item.php?it_id=123456,https://www.ople.com/mall5/shop/item.php?it_id=123457,...
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      <Textarea id="description" className="min-h-32" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="url_file">
                        크롤링할 url 파일로 제출하기 (한 줄에 하나의 url이
                        입력되어 있는 txt 파일 제출)
                      </Label>
                      <Input id="url_file" type="file" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>크롤링 결과 다운로드 확장자 설정</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xlsx">xlsx</SelectItem>
                          <SelectItem value="published">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
