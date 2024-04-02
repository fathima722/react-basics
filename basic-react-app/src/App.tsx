import Exercise1 from "./components/Exercise1";
import './App.css';
import InputTasks from "./components/InputTasks";

function App() {
  //return <div><Message></Message></div>;
  return (
    <div className="container">
      <Exercise1/>
      <InputTasks />
    </div>
  ); //-> example of using self-closing syntax <Exercise1 />
}

export default App;
