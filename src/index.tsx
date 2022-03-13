import { StrictMode } from "react";
import ReactDOM from "react-dom";
import QueryClientProvider from "@Providers/QueryClientProvider";
import RouterProvider from "@Providers/RouterProvider";
import ChakraProvider from "@Providers/ChakraProvider";
import App from "./App";

function render() {
  ReactDOM.render(
    <StrictMode>
      <ChakraProvider>
        <QueryClientProvider>
          <RouterProvider>
            <App />
          </RouterProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </StrictMode>,
    document.getElementById("root")
  );
}

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser")
    .then((d) => {
      d.worker.start();
    })
    .then(() => {
      render();
    });
} else {
  render();
}
