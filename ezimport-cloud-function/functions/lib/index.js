"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOpleCrawler = exports.helloWorld = void 0;
const functions = require("firebase-functions/v1");
const ople_crawler_1 = require("./crawlers/ople-crawler");
require("dotenv/config");
exports.helloWorld = functions
    .region("asia-northeast3")
    .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
exports.startOpleCrawler = functions
    .region("asia-northeast3")
    .runWith({
    memory: "2GB",
    timeoutSeconds: 120,
})
    .https.onRequest(async (request, response) => {
    functions.logger.info("Start Crawler", { structuredData: true });
    const crawler = new ople_crawler_1.default();
    await crawler.start();
    response.send("End Crawler");
});
//# sourceMappingURL=index.js.map