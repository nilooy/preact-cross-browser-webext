import { render } from "preact";
import "../../src/styles/index.css";
import browser from "webextension-polyfill";

const Popup = () => {


    return (
        <div className="p-5 shadow-2xl">
            <h1 className="text-5xl">Hello from extension</h1>
            <div className="shadow-2xl rounded-2xl inline-flex overflow-hidden">
                <iframe src="https://giphy.com/embed/QAsHga1AB6dIGUsui6" width="280" height="280" frameBorder="0"
                        className="giphy-embed" allowFullScreen></iframe>
            </div>

            <button onClick={()=> {
                browser.runtime.openOptionsPage();
                window.close()
            }} className="px-6 py-3 txt-2xl border-2 hover:bg-gray-800 hover:text-white ml-6 ">Go To Option Page</button>
        </div>
    );
};

render(<Popup />, document.getElementById("root")!);
