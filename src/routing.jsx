import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./login/login";
import App from "./home/app";
import About from "./home/about";
import Faq from "./home/faq";
import Logout from "./home/logout";
import Search from "./home/search";






function Routing() {
	
    return (
        <>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/app" element={<App/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/faq" element={<Faq/>}/>
            <Route exact path="/logout" element={<Logout/>}/>
            <Route exact path="/search" element={<Search/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
    }
    
    export default Routing;
    