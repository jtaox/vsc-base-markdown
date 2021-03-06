import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Editor from "./components/Editor";
import { instance as poster } from "./postMessage";

import "./index.less";

const App = () => {
  const [text, setText] = useState("");

  const setContent = () => {
    setText("hello")
  }

  useEffect(() => {
    poster.subscribe("vscBaseMarkdown.setContent", setContent)
  }, [])

  return (
    <div className="app">
      <Editor value={text} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
