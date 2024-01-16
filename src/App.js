import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
