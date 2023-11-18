import React from "react";
import Browser from "./Browser";
export default function BrowsersMain({browsers}){
    return(
        <section>
            <header>
                <h1>Popular Web Browsers</h1>
            </header>
            <div className="websites">
                {browsers.map((browser, i) => (
                    <Browser key={i} {...browser}/>
                ))}
            </div>
        </section>
    );
}