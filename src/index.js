import React from "react";
import { createRoot, render } from "react-dom";
import data from "./data/data.json";
import AllComponentsCompiler from "./componenets/AllComponentsCompiler";

const root = createRoot(document.getElementById("root"))
root.render(<AllComponentsCompiler browsers={data}/>)