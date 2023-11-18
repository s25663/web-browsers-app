//import data from "../data/data.json";
import React from "react";
import Nav from "./Nav";
import BrowsersMain from "./BrowsersMain";
import Footer from "./Footer";

export default function AllComponentsCompiler({browsers}){
    return(
        <div>
            <Nav/>
            <BrowsersMain browsers={browsers}/>
            <Footer/>
        </div>
    );
}