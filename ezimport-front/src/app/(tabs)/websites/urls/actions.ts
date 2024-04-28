"use server";

import { redirect } from "next/navigation";

export async function crawlAndDownload(formData: FormData) {
  const data = {
    name: formData.get("name"),
    urls_in_text: formData.get("urls_in_text"),
    url_file: formData.get("url_file"),
  };
  console.log(data);

  // crawl

  // download excel file

  // send crawl result to /products page to show
  redirect("/websites/products");
}
