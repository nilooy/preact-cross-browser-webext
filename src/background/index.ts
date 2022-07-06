import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(async () => {

    const optionPage = browser.runtime.getURL(
        'dist/options/index.html',
    )

    if (optionPage)
        return browser.tabs.create({ // open the option page when extension is installed
            url: optionPage,
        })
})