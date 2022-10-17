import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhoIAm from "./components/WhoIAm";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const isBrowserDefaultDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
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
          <WhoIAm />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
