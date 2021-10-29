import React, { Component, useState } from 'react'

import lightoff from "../assets/lightOff_248X486.png"
import lighton from "../assets/lightOn_248X486.png"
import "./light.scss"

function Lights() {

    const[light,setLight]=useState(false)

    

    function handleClick(e){
        setLight(!light)
    }

    return ( <div className="bd">
        <div className="mainContainer">
        <div className="container">
            <h1></h1>
            <button id="bt1" onClick={handleClick} className="buttonCute">ON/OFF</button>
        </div>
            {!light ? <img className="lights" src={lightoff} alt ="light off"/> : <img className="lights" src={lighton} alt ="light on"/>}
        </div>
    </div> );
}

export default Lights;