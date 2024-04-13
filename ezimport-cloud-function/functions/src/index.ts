import * as functions from "firebase-functions/v1";
import OpleCrawler from "./crawlers/ople-crawler";
import "dotenv/config";

export const helloWorld = functions
  .region("asia-northeast3")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  });

export const startOpleCrawler = functions
  .region("asia-northeast3")
  .runWith({
    memory: "2GB",
    timeoutSeconds: 120,
  })
  .https.onRequest(async (request, response) => {
    functions.logger.info("Start Crawler", { structuredData: true });
    const crawler = new OpleCrawler();
    await crawler.start();
    response.send("End Crawler");
  });
