import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Projects from "./components/Projects"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;