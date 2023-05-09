import React from "react";
import ThemeBtn from "./components/ThemeBtn";
import Fetch from "./components/Fetch";
import "antd/dist/reset.css";
import { Theme } from "./components/Theme";
import "./App.css";
export default function App() {
  return (
    <div className="App dark">
      <ThemeBtn />
      <Fetch />
      <Theme />
    </div>
  );
}
