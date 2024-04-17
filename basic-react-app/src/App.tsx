import './App.css';
import CommonContainer from './components/CommonContainer';
import TaskContainer from './components/TaskContainer';
import Coursera from './components/Coursera';
import Exercise2 from './components/Exercise2';
import Heading from './components/Heading';
import Task1 from './components/Task1';

function App() {
  //return <div><Message></Message></div>;
  //the CommonContainer is a component created to hold all the child components together. This is to showcase the use of props.children
  return (
    <div className="container">
    <TaskContainer>
      <Task1/>
    </TaskContainer>
    <CommonContainer className="container">
      <Coursera />
      <Heading title="I am the second heading" />
      <Exercise2 />
    </CommonContainer> </div>
  ); //-> example of using self-closing syntax <Exercise1 />
}

export default App;
