import 
import './App.css';

import report from '../src/report';
import { fetchWeatherReport, getGerLocation } from '../src/report';


function App() {
  
const [appStatus , setApiStatus] = useState("init");
const [report, setReport] = useStatus(null);

useEffect(())




  return (
    <div className="App"></div>
  )
}

export default App;

// when do we need useeffect hook ? 
// API calls has to be made inside useEffect's callback.

// An effect can return another function(cleanup) and nothing