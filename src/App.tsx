import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const isBrowserDefaultDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    debugger;
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = React.useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header />
          <div>TEST</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
