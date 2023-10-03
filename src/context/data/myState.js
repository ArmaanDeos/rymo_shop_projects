import React, { useState } from "react";
import MyContext from "./myContext";

const MyState = ({ children }) => {
  // Dark and Light Mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3436";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // Loader
  const [loader, setLoader] = useState(false);

  // Spinner
  const [spinner, setSpinner] = useState(false);

  return (
    <MyContext.Provider
      value={{ mode, toggleMode, loader, setLoader, spinner, setSpinner }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
