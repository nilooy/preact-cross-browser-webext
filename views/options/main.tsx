import { render } from "preact";
import "../../src/styles/index.css";

const Options = () => (
  <div className="p-20 shadow-2xl bg-gray-800 w-full h-screen">
    <h1 className="text-5xl text-gray-200 text-center">
      Hello from extension option
    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
);

render(<Options />, document.getElementById("root")!);
