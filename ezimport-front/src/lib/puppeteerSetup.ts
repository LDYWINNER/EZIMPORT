// import chromium from "chrome-aws-lambda";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export default async function setupPuppeteer() {
  console.log("Chromium path:", await chromium.executablePath);

  const browser = await puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: true,
    ignoreHTTPSErrors: true,
  });

  return browser;
}

// args: chromium.args,
//     defaultViewport: chromium.defaultViewport,
//     executablePath: await chromium.executablePath,
//     headless: chromium.headless,
