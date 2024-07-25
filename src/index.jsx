// import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
console.log(entryPoint);
console.log(ReactDOM);
console.log(App);
ReactDOM.createRoot(entryPoint).render(<App />);
