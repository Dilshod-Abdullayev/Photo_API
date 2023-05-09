import { useSelector } from "react-redux";

export const Theme = () => {
  const themeReduc = useSelector((state) => state.darkThemeReducer);
  return themeReduc.darkThemeOn;
};