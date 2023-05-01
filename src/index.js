import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SharxcProvider } from "./context/context";
import Favicon from "react-favicon";
// Favicon
import ico from "./assets/img/favicon.ico";
import favicon32 from "./assets/img/favicon-32x32.png";
import favicon16 from "./assets/img/favicon-16x16.png";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SharxcProvider>
      <Favicon url={[ico, favicon32, favicon16]} />
      <App />
    </SharxcProvider>
  </React.StrictMode>
);
