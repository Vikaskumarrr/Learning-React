import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";

const LayOut = ()=>{ 
   return(
      <div>
         <nav>
            <div><Link to={"/user/home"}>home</Link></div>
            <div><Link to={"/user/about"}>about</Link ></div>
         </nav>
      < Outlet />
      </div>
   )
}


 const ThemeApp = ()=>{ 
    return (
       <BrowserRouter>
       <Routes>
        {/* <Route path="" element={<h1>Display</h1>} /> */}
        {/* <Route path="" Component={Home} /> */}
        <Route path="user" element={< LayOut />}>
             <Route path="home" element={< Home />} />
             <Route path="about" element={< About />} />
             <Route path="*" element={<h1>Invaild Route</h1>} />
        </Route>
       </Routes>
       </BrowserRouter>
    )
}

export default ThemeApp ; 

/* For heavy  component need to load only when needed then use lazy loading which are used in react
 import in lazy callback function then import that component in that function then use 
 <Suspence component with the fallback prop to show loading screen and component in it for mounting the component
 import { lazy, Suspense } from "react";
 const Home = lazy(()=> import("./Components/Home"));
 <Suspense fallback={<h1>Loading...</h1>}>
*/