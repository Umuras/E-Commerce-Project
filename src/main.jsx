import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.js";
import { Toast } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { PreviousPageProvider } from "./contexts/PreviousPageContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <PreviousPageProvider> */}
    <ToastContainer />
    <App />
    {/* </PreviousPageProvider> */}
  </BrowserRouter>
);
