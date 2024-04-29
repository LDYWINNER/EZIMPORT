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
    urls_from_file: formData.get("urls_from_file"),
  };
  console.log(data);

  // for (const path of (data!.urls_from_file! as string).split("\n")) {
  //   console.log(path);
  // }

  // crawl
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const excelData: Array<Array<string>> = [["품명", "품절 사이즈"]];
  const urls_in_text = (data.urls_in_text as string).split("\n");
  const urls_from_file = (data.urls_from_file as string).split("\n");
  const urls = urls_in_text.concat(urls_from_file);

  for (const path of urls) {
    console.log("path:", path); // Just for checking

    try {
      await page.goto(path);
      await page.waitForSelector(".normal_reserve_item_name", {
        visible: true,
      });

      const name = await page.$eval(
        ".normal_reserve_item_name",
        (elem) => elem.textContent || ""
      );
      const sizeButtons = await page.$$eval(
        ".grid-element--1c5t6",
        (elements) =>
          elements
            .map((e) => e.textContent?.trim() || "")
            .filter((text) => text.includes("売り切れ"))
      );

      let outOfStockSizes = sizeButtons
        .map((text) => text.split(/\s+/)[0])
        .join(" ");

      console.log(name, outOfStockSizes); // Just for checking

      excelData.push([name, outOfStockSizes]);
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  await browser.close();

  // download excel file
  // const nowDatetime = format(new Date(), " MM-dd HHmm");
  // const fileName = "result_details" + nowDatetime + ".xlsx";
  // const workbook = new ExcelJS.Workbook();
  // const worksheet = workbook.addWorksheet();

  // excelData.forEach((data, rowIndex) => {
  //   worksheet.addRow(data);
  // });

  // await workbook.xlsx.writeFile(fileName);
  // console.log(`Saved data to ${fileName}`);

  // send crawl result to /products page to show
  redirect("/websites/products");
}
