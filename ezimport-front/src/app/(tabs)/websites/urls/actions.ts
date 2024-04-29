"use server";

import { redirect } from "next/navigation";
import puppeteer from "puppeteer";
import ExcelJS from "exceljs";
import fs from "fs";
import { format } from "date-fns";

const TM = 3000; // time to wait for page to load + avoid detection

export async function crawlAndDownload(formData: FormData) {
  const data = {
    name: formData.get("name"),
    urls_in_text: formData.get("urls_in_text"),
    url_file: formData.get("url_file"),
  };
  console.log(data);

  // crawl
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const urls = fs
    .readFileSync(data.url_file, "utf8")
    .split("\n")
    .map((line) => line.trim());
  const excelData: Array<Array<string>> = [["품명", "품절 사이즈"]];

  for (const path of urls) {
    await page.goto(path);
    await page.waitForTimeout(TM);

    console.log(path); // Just for checking

    const name = await page.$eval(
      ".normal_reserve_item_name",
      (elem) => elem.textContent || ""
    );
    const sizeButtons = await page.$$eval(".grid-element--1c5t6", (elements) =>
      elements
        .map((e) => e.textContent?.trim() || "")
        .filter((text) => text.includes("売り切れ"))
    );

    let outOfStockSizes = sizeButtons
      .map((text) => text.split(/\s+/)[0])
      .join(" ");

    excelData.push([name, outOfStockSizes]);
  }

  await browser.close();

  const nowDatetime = format(new Date(), " MM-dd HHmm");
  const fileName = "result_details" + nowDatetime + ".xlsx";
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet();

  excelData.forEach((data, rowIndex) => {
    worksheet.addRow(data);
  });

  await workbook.xlsx.writeFile(fileName);
  console.log(`Saved data to ${fileName}`);

  // download excel file

  // send crawl result to /products page to show
  redirect("/websites/products");
}
