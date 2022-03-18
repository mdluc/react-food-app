import ChangeTheme from "./ChangeTheme";
import { useState, useEffect } from "react";

const SettingContainer = ({ title, children}) => {
  // const [settings, setSettings] = useState({
  //   "--background-color": "#fff",
  //   "--background-light": "#fff",
  //   "--primary-color": "rgb(255, 0, 86)",
  //   "--shadow-color": "rgba(0,0,0,0.2)",
  //   "--text-color": "#0A0A0A",
  //   "--text-light": "#575757",
  //   "--font-size": "16px",
  //   "--animation-speed": 1,
  // });
  // useEffect(() => {
  //   const root = document.documentElement;
  //   for (let key in settings) {
  //     root.style.setProperty(key, settings[key]);
  //   }
  // }, [settings]);

  // const [theme, setTheme] = useState("light");
  // const themes = [
  //   {
  //     "--background-color": "#fff",
  //     "--background-light": "#fff",
  //     "--shadow-color": "rgba(0,0,0,0.2)",
  //     "--text-color": "#0A0A0A",
  //     "--text-light": "#575757",
  //   },
  //   {
  //     "--background-color": "rgb(29, 29, 29)",
  //     "--background-light": "rgb(77, 77, 77)",
  //     "--shadow-color": "rgba(0,0,0,0.2)",
  //     "--text-color": "#ffffff",
  //     "--text-light": "#eceaea",
  //   },
  // ];

  // function changeTheme(i) {
  //   const _theme = { ...themes[i] };
  //   setTheme(i === 0 ? "light" : "dark");
  //   let _settings = { ...settings };
  //   for (let key in _theme) {
  //     _settings[key] = _theme[key];
  //   }
  //   setSettings(_settings);
  // }

  // const type = ["theme", "color", "fontSize", ]
  return (
    <div className="section d-block">
      <h2>{title}</h2>
      <div className="options-container">
      {children}
      </div>
    </div>
  );
};

export default SettingContainer;
