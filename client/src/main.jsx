import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "./redux/store.js";
import ToastContainerComponent from "./components/ToastContainerComponents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainerComponent></ToastContainerComponent>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
