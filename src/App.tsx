import { useState } from "react";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const handleIncrement = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature >= 15) {
      
      setTemperatureColor("hot");
    }
  };

  const handleDecrement = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature <= 15) {
      setTemperatureColor("cold");
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>
            {temperatureValue}°C
          </div>
          <div className="button-container">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
    </>
  );
}
