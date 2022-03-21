import { useState, useEffect } from "react";
import SettingContainer from "../components/SettingsContainer/SettingsContainer";
import ChangeTheme from "../components/ChangeTheme/ChangeTheme";
import {
  colorOption,
  primaryColors,
  fontSizes,
  animationSpeeds,
} from "../db/datas";

const Settings = () => {
  const [theme, setTheme] = useState(0);
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const titles = [
    "Preferred theme",
    "Preferred color",
    "Font Size",
    "Animation Speed",
  ];
  const type = [true, true, false, false];
  let states = [theme, primaryColor, fontSize, animationSpeed];

  const datas = [colorOption, primaryColors, fontSizes, animationSpeeds];

  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });
  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const changeColor = (i) => {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  };

  const changeThemeColor = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? 0 : 1);
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  };

  const changeFontSize = (i) => {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  };

  const changeAnimationSpeed = (i) => {
    let _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  };

  const arrayOfFunctions = [
    changeThemeColor,
    changeColor,
    changeFontSize,
    changeAnimationSpeed,
  ];
  
  return (
    <div>
      {datas.map((data, idx) => (
        <SettingContainer key={idx} title={titles[idx]}>
          {data.map((item, index) => (
            <ChangeTheme
              key={index}
              option={index}
              colorOption={item}
              changeTheme={() => arrayOfFunctions[idx](index)}
              theme={states[idx]}
              type={type[idx]}
            />
          ))}
        </SettingContainer>
      ))}
    </div>
  );
};
export default Settings;
