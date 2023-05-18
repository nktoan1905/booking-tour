import React from "react";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Error() {
  return (
    <React.Fragment>
      <Header></Header>
      <main className="error_main">
        <h1 className="error_title">
          4
          <span>
            <i className="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2 className="error_text">Error: 404 page not found</h2>
        <p className="error_text-p">Sorry, the page you're looking for cannot be accessed</p>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
