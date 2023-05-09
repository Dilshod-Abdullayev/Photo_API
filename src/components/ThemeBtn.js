import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Button } from "antd";
import darkTheme from "../redux/action/darkTheme";
import { useSelector, useDispatch } from "react-redux";
export default function ThemeBtn() {
  const themeReduc = useSelector((state) => state.darkThemeReducer);
  const dispatch = useDispatch();
  let theme = themeReduc.darkThemeOn;
  return (
    <Button
      type="primary"
      onClick={() => dispatch(darkTheme())}
      shape="round"
      size="large"
      icon={theme ? <BsFillMoonFill /> : <BsFillSunFill />}
    >
      ChangeTheme
    </Button>
  );
}
