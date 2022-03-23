import AppProvider from "@Providers";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

function render() {
  ReactDOM.render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>,
    document.getElementById("root")
  );
}

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser")
    .then((d) => {
      d.worker.start({ onUnhandledRequest: "bypass" });
    })
    .then(() => {
      render();
    });
} else {
  render();
}
