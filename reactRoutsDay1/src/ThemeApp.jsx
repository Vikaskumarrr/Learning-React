import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

 const ThemeApp = ()=>{ 
    return (
       <BrowserRouter>
       <Routes>
        {/* <Route path="" element={<h1>Display</h1>} /> */}
        <Route path="" Component={Home} />
       </Routes>
       </BrowserRouter>
    )
}

export default ThemeApp ; 