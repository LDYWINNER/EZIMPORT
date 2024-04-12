import * as functions from "firebase-functions/v1";

export const helloWorld = functions
  .region("asia-northeast3")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  });
