
import browser, {Runtime} from 'webextension-polyfill'

export const getBrowserInfo = async (): Promise<Runtime.BrowserInfo> => {
 return browser.runtime.getBrowserInfo?.() || {}
}

export const isFirefox = async (): Promise<boolean> => {
 const {name} = await getBrowserInfo()
 return name === 'Firefox'
}

export const isChrome = async (): Promise<boolean> => {
 const {name} = await getBrowserInfo()
 return name === 'Chrome'
}
