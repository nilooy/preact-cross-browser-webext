import { render } from "preact";
import "../../src/styles/index.css";

const Popup = () => (
  <div className="p-20 shadow-2xl">
    <h1 className="text-5xl">Hello from extension</h1>
  </div>
);

render(<Popup />, document.getElementById("root")!);
