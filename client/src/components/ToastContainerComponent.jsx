import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
export default function ToastContainerComponent(props) {
  return (
    <ToastContainer
      style={{ bottom: "0em", marginTop: "30px" }}
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={"colored"}
    />
  );
}
