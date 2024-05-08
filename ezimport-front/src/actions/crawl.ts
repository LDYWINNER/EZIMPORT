"use server";

import puppeteer from "puppeteer";

// const TM = 3000; // time to wait for page to load + avoid detection

export async function crawlAndDownload(formData: FormData) {
  const data = {
    name: formData.get("name"),
    urls_in_text: formData.get("urls_in_text"),
    urls_from_file: formData.get("urls_from_file"),
    status: formData.get("status"),
  };
  console.log(data);

  // for (const path of (data!.urls_from_file! as string).split("\n")) {
  //   console.log(path);
  // }

  // crawl
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--disable-gpu",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });

  const page = await browser.newPage();

  const excelData: Array<Array<string>> = [["품명", "품절 사이즈"]];
  const urls_in_text = (data.urls_in_text as string).split("\n") || [];
  const urls_from_file = (data.urls_from_file as string).split("\n") || [];
  const urls = urls_in_text.concat(urls_from_file);

  for (const path of urls) {
    console.log("path:", path); // Just for checking

    if (path === "") {
      continue;
    }

    try {
      await page.goto(path, {
        waitUntil: "domcontentloaded",
        timeout: 120000,
      });
      await page.waitForSelector(".normal_reserve_item_name", {
        visible: true,
      });

      console.log(await page.title());

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

      console.log("result here");
      console.log(name, outOfStockSizes); // Just for checking

      excelData.push([name, outOfStockSizes]);
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  console.log(excelData);
  return {
    data: excelData,
  };
}

// 결과값:
/* {"data":[["품명","품절 사이즈"],["コンバース オールスター (R) トレックウエーブ Ｚ ＨＩ CONVERSE ALL STAR (R) TREKWAVE Z HI 31310810 31310811 メンズ レディース スニーカー","US3.0(22.0cm)売り切れ US3.5(22.5cm)売り切れ US6.5(25.0cm)売り切れ"]]} */
