import React from "react";

export default function Browser({name, logo, descriprion}){
    return(
        <article>
            <h2>{name}</h2>
            <img src={logo} width={300} height={300}></img>
            <p>{descriprion}</p>
        </article>
    );
}