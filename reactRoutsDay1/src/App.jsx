import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { About } from './About';
import HomeScreen from './HomeScreen';
import FetchUsers from "./Components/FetchUsers";



function App() { 
  return (
    <div>
      < FetchUsers / >
    </div>
    )
    }
      {/* <BrowserRouter>
      <Routes>
        <Route path='home' element={<div>
          <h1 className='logo-spin'>Home page...</h1>  
          <HomeScreen />
          </div>
          }/> 
          <Route path="about" element={<div>
            <h1>About section</h1>
            < About />
          </div>} />
          
        <Route path='*' element={<div className='logo'> <h1>404 Page Not Found..</h1></div>}/>
      </Routes>
      </BrowserRouter>
    </div> */}
  {/* )
} */}
export default App
