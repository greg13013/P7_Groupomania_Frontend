import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const SwitchDarkMode = () => {

    const { toggleDarkMode } = useContext(DarkModeContext);

    const toggleSwitchDarkMode = () => {
      toggleDarkMode();
    };

  return (
    <div className="switch">
      <label>
      <i className="fa-solid fa-sun"></i>
        <input type="checkbox" onChange={(e) => toggleSwitchDarkMode()} />
        <span className="lever"></span>
        <i className="fa-solid fa-moon"></i>
      </label>
    </div>
  );
};
