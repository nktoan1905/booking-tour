import React from "react";
import CommonLayout from "../../components/Layout/CommonLayout";
import "./style.css";
const Error = () => {
  return (
    <CommonLayout>
      <main className="error_main">
        <h1 className="error_title">
          4
          <span>
            <i className="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2 className="error_text">Error: 404 page not found</h2>
        <p className="error_text-p">
          Sorry, the page you're looking for cannot be accessed
        </p>
      </main>
    </CommonLayout>
  );
};

export default Error;
