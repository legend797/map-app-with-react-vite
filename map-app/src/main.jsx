import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
// import "flowbite";
import { BrowserRouter as Router } from "react-router-dom";

// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "./features/api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Router>
      <App />
    </Router>
  
);