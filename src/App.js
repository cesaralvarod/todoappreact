import React from "react";

// Components

import TopBar from "./components/layouts/TopBar";
import Content from "./components/Content";
import Footer from "./components/layouts/Footer";

// Styles

import "./App.css";

const App = () => {
  return (
    <>
      <TopBar />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;
