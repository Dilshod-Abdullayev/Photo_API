import React from "react";
import ThemeBtn from "./components/ThemeBtn";
import Fetch from "./components/Fetch";
import "antd/dist/reset.css";
import { Theme } from "./components/Theme";
import "./App.css";
import { useSelector } from "react-redux";
export default function App() {
  const themeReduc = useSelector((state) => state.darkThemeReducer.darkThemeOn);
  return (
    <div className={themeReduc ? "light" : "dark  "}>
      <ThemeBtn />
      <Fetch />
    </div>
  );
}
