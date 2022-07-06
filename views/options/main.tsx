import { render } from "preact";
import "../../src/styles/index.css";

const Options = () => (
  <div className="p-20 shadow-2xl bg-gray-800 w-full h-screen">
    <h1 className="text-7xl text-gray-200 text-center mb-20 font-black">
      Hello from extension option
    </h1>
      <div className="m-auto flex justify-center">
          <div className="shadow-2xl rounded-2xl inline-flex overflow-hidden mr-5">
              <iframe src="https://giphy.com/embed/6UL3rqweR5Y2Jcrnqb" width="380" height="380" frameBorder="0"
                      className="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="shadow-2xl rounded-2xl inline-flex overflow-hidden">
              <iframe src="https://giphy.com/embed/6UL3rqweR5Y2Jcrnqb" width="380" height="380" frameBorder="0"
                      className="giphy-embed" allowFullScreen></iframe>
          </div>
      </div>
  </div>
);

render(<Options />, document.getElementById("root")!);
