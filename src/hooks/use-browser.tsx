import { useEffect, useState } from "preact/compat";
import { getBrowserInfo } from "../utils";
import { Runtime } from "webextension-polyfill";

export const useBrowser = () => {
  const [browser, setBrowser] = useState<Runtime.BrowserInfo>();

  useEffect(() => {
    getBrowserInfo().then((browserInfo) => setBrowser(browserInfo));
  }, []);

  return {
    browser,
    isFirefox: browser?.name === "Firefox",
    isChrome: browser?.name === "Chrome",
  };
};
