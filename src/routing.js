import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./home";
import Merge from "./merge";
import Split from "./split";
import Compress from "./compress";
import PdftoWord from "./pdf to word";
import PdftoPoint from "./pdf to point";
import PdftoXl  from "./pdf to xl";
import WordtoPDF from "./wordtopdf";

function Routing() {
     

	
    return (
        <>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/merge" element={<Merge/>}/>
        <Route exact path="/split" element={<Split/>}/>
        <Route exact path="/compress" element={<Compress/>}/>
        <Route exact path="/pdf to word" element={<PdftoWord/>}/>
        <Route exact path="/pdf to point" element={<PdftoPoint/>}/>
        <Route exact path="/pdf to xl" element={<PdftoXl/>}/>
        <Route exact path="/wordtopdf" element={<WordtoPDF/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
    }
    
    export default Routing;
    