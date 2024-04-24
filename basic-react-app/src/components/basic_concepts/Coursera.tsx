import Heading from "./Heading";
import Card from "./Card";
import Btn from "./Btn";
import '../index.css';
import ModeToggler from "./ModeToggler";
import { useState } from "react";

function Coursera(){
  const getRandomNum = () => Math.floor(Math.random() * 10) + 1;

  //useState lifeCycle hook example
  const [darkModeState, setDarkModeState] = useState(false);
  const handleChange = () => {
    setDarkModeState((current) => {
      let a = !current;
      console.log(a);
      return a; 
    }
  );
  // setTimeout(() => {
  //   console.log('dark mode after timeout is:', darkModeState);
  // }, 0)
}
    return ( 
        <div className="App"> 
          <Heading title='Welcome'/> 
          <h1>Task: Add three Card elements</h1>
          <Card  h2="First card's h2" h3="First card's h3"/>
          <Card h2="Second card's h2" h3="Second card's h3" />
          <Card h2="Third card's h2" h3="Third card's h3"/>
          <h6>{Math.random() >= 0.5 ? 'Over 0.5' : 'Under 0.5'}</h6>
          <h6>{getRandomNum()}</h6>
          <Btn/>
          <button onClick={handleChange} style={{display: "block",margin: "5px auto", backgroundColor: "brown",}}>Change below text based on state</button>
          {/* sending the updated state as props to child component */}
          <ModeToggler changeMessage={darkModeState}/>
        </div> 
      ); 
}

export default Coursera;