import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./styles.css";

export default function App() {
  return (
    <div className="main--body">
      <Header />
      <Body />
    </div>
  );
}
