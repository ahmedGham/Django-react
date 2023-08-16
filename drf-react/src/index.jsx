import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Router, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //   <BrowserRouter>
  <>
    <Header />
    {/* <Router> */}
    {/* <Route path="/" element={<App />} /> */}
    <App/>
    {/* </Router> */}
    // <Footer />
  </>
  //   </BrowserRouter>
);
