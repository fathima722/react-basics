import './App.css';
import CommonContainer from './components/basic_concepts/CommonContainer';
import TaskContainer from './components/basic_concepts/TaskContainer';
import Coursera from './components/basic_concepts/Coursera';
import Exercise2 from './components/basic_concepts/Exercise2';
import Heading from './components/basic_concepts/Heading';
import Task1 from './components/basic_concepts/Task1';
import TextInputWithFocusButton from './components/basic_concepts/TextInputWithFocusButton';
import PropsDrilling from './components/basic_concepts/PropsDrilling';
import Parent from './components/sibling_components/Parent';

function App() {
  //return <div><Message></Message></div>;
  //the CommonContainer is a component created to hold all the child components together. This is to showcase the use of props.children
  return (
    <div className="container">
      {/* <Parent/> */}
    <TaskContainer>
      <Task1/>
      <TextInputWithFocusButton/>
      <PropsDrilling/>
    </TaskContainer>
    <CommonContainer className="container">
      <Coursera />
      <Heading title="I am the second heading" />
      <Exercise2 />
    </CommonContainer> </div>
  ); //-> example of using self-closing syntax <Exercise1 />
}

export default App;
