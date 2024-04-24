import { useState } from "react";

export default function AboutMe() {
    const birdChirping = new Audio("//xeno-canto.org/sounds/uploaded/TILFBAQTMD/XC554810-Northern%20Waterthrush%2C%20PR%20Link%20Trail%2C%20May%206th%2C%202020.wav");
    let [playing, setPlaying] = useState('Play')

    function onEnable() {
        if(birdChirping.paused){
            setPlaying((current) => {
                current = 'Pause';
                return current;
            })
            birdChirping.play();
        }else {
            setPlaying((current) => {
                current = 'Play';
                return current;
            })
            birdChirping.pause();
        }
    }
    return (
        <>
            <h5>I am a new learner!!!!!!!!!!</h5>
            <button onClick={onEnable}>{playing}</button>
        </>
    )
}