import React from "react";
import Routes from "@Routes/index";
import AppProvider from "./providers";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
