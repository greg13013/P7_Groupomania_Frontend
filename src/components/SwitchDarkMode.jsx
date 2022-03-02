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
        Light
        <input type="checkbox" onChange={(e) => toggleSwitchDarkMode()} />
        <span className="lever"></span>
        Dark
      </label>
    </div>
  );
};
