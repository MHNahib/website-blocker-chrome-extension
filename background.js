import { blockWebsite } from "./src/main.js";

const urlList = ["jaya9.app"];

urlList.forEach((url) => {
  blockWebsite(url);
});
