import { useState, useEffect } from "react"
import './App.css';

import report from '../src/report';
import { fetchWeatherReport, getGerLocation } from '../src/report';


function App() {

  const [apiStatus, setApiStatus] = useState("init");
  const [report, setReport] = useState(null);
  const [unit, setUnit] = useState("c")

  const toggleUnit = ()=>{ 
    setUnit(unit === "c" ? "f" : "c");
  };


  // useEffect(() => {
  //   // fetch the location 
  //   // fetch the report
  //   (async function () {
  //     setApiStatus("pending");
  //     const location = await getGerLocation()
  //     const { success, data } = await fetchWeatherReport(location.coords);
  //     if (success) {
  //       setApiStatus("success");
  //       setReport(data);
  //     } else setApiStatus("error");
  //   })();
  // }, []);


  // if (setApiStatus === "pending" || apiStatus === "init") {

  //   return <p>Loading...</p>
  // }
  return (
    <div className="App">
      <h1>{"Bathinda"}</h1>
      <div className="weather-report">
        <div className="left">
          <img src="images/rain.png" alt="cloud" />
          <div className="temparature">
            <h3>27</h3>
            <button onClick={toggleUnit} disabled={unit === "f"} >°C</button>
            <span>|</span>
            <button onClick={toggleUnit} disabled={unit === "c"} >°F</button>
          </div>
          <div className="parameter">
            <span>Humidty: 83%</span>
            <span>Wind Speed: 8kmph</span>
          </div>
        </div>
        <div className="right">
          <h3>Weahter</h3>
          <span>Thusday,9:00pm</span>
          <span>Cloudy</span>
        </div>
      </div>
    </div>
  )
}

export default App;

// when do we need useeffect hook ? 
// API calls has to be made inside useEffect's callback.

// An effect can return another function(cleanup) and nothing