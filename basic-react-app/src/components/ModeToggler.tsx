import { useState } from "react";

function ModeToggler(props){
    let darkModeOn = false;
    const darkMode = <h1>You are in dark mode</h1>
    const lightMode = <h1>You are in light mode</h1>

    const handleClick = () => {
        console.log('Mode Change detected');
        darkModeOn = !darkModeOn;
        if(darkModeOn) console.log('dark mode is on: ',darkModeOn)
        else if(darkModeOn == false) console.log('light mode is on: ',darkModeOn)
    }

    return (<>
            <button onClick={handleClick} style={{display: "block",margin: "5px auto", backgroundColor: "brown",}}> Mode Change</button>
            {darkModeOn ? darkMode : lightMode}

           {/* This text below keeps changing based on a button click and state passed using props from the parent component */}
            {props.changeMessage ? darkMode : lightMode}
    </>)
}

export default ModeToggler;