import React, { useEffect } from "react";
import Card from "./components/Card/Card";
import { useGenerateColors } from "./hooks/useGenerateColors";

const App = () => {
  const {
    generateColors,
    activePage,
    colorPages,
    setColorPages,
    toggleLock,
    togglePage,
  } = useGenerateColors();
  useEffect(() => {
    generateColors();
  }, []);
  return (
    <div className="">
      <button onClick={() => generateColors()}>Randomize Colors</button>
      <button onClick={() => togglePage()}>Next Page</button>
      <div className="wrapper">
        {colorPages[activePage].map((color) => {
          return (
            <Card
              key={color.colorName}
              backgroundColorData={color}
              toggleLock={toggleLock}
              backgroundColorDataSetter={setColorPages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
