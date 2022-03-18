import { useState, useEffect } from "react";
import SettingContainer from "../components/ChangeTheme/SettingsContainer";
import ChangeTheme from "../components/ChangeTheme/ChangeTheme";
import { colorOption, primaryColors, fontSizes, animationSpeeds } from "../components/ChangeTheme/datas";

const Settings = () => {
  const [theme, setTheme] = useState(0);
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);
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

  const changeTheme = (i) => {
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

  const titles = [
    "Preferred theme",
    "Preferred color",
    "Font Size",
    "Animation Speed"
  ]
const functionArray = [changeTheme, changeColor, changeFontSize,changeAnimationSpeed ]
const data = [colorOption, primaryColors, fontSizes, animationSpeeds, ]
  return (
    <div>
      <SettingContainer title="Preferred theme">
        {colorOption.map((item, index) => (
          <ChangeTheme
            key={index}
            option={index}
            colorOption={item}
            changeTheme={() => changeTheme(index)}
            theme={theme}
            type
          />
        ))}
      </SettingContainer>
      <SettingContainer title="Preferred color">
        {primaryColors.map((item, index) => (
          <ChangeTheme
            key={index}
            colorOption={item}
            option={index}
            changeTheme={() => changeColor(index)}
            theme={primaryColor}
            type
          />
        ))}
      </SettingContainer>
      <SettingContainer title="Font size">
        {fontSizes.map((item, index) => (
          <ChangeTheme
            key={index}
            colorOption={item}
            option={index}
            changeTheme={() => changeFontSize(index)}
            theme={fontSize}
          />
        ))}
      </SettingContainer>
      <SettingContainer title="Animation speed">
        {animationSpeeds.map((item, index) => (
          <ChangeTheme
            key={index}
            colorOption={item}
            option={index}
            changeTheme={() => changeAnimationSpeed(index)}
            theme={animationSpeed}
          />
        ))}
      </SettingContainer>
    </div>
  );
};
export default Settings;
