import { Fragment, useState } from "react"; // Instead of importing this fragment here we can also not import fragment and use <>to wrap all child elements between empty elements like this</>
import { MouseEvent } from "react";
import FormControls from "./FormControls";

function ListGroup() {
  let items = ["NewYork", "Illinois", "Texas", "Georgia", "North Carolina"];
  //items = [];
  // let selectedIndex = 0; // if selectedIndex is -1 then that means no item is selected. 0 would mean first item

  /*The below is a state hook which tells react that this component contains data or state that will change over time.
  Here useState function results in an array where arr[0] is the variable and arr[1] is the updater function which updates our variable.
  In this scenario selectedIndex is the variable that will be updated by setSelectedIndex updater function. The initial value of our varibale here is set to -1.
  */
  const [selectedIndex, setSelectedIndex] = useState(-1); // one of the built-in functions in react. This function is called a Hook(A hook is a function that allows us to tap in to the built-in features in React)
  //const [location, setLocation] = useState(''); //Another example setting the default location value to an empty string(Observe the names of our variable and updater function here)

  const getMessage = () => {
    // return items.length == 0 ? <p>No items found</p> : null; // We can write the same more concisely as below return statement
    return items.length == 0 && <p>No items found</p>; // logic here: since true && 1 will result in 1, true && 'anything' will result in anything, false && 'anything' will result in false
  };

  //called Event handler (as its job is handling events)
  const handleClicked = (event: MouseEvent) => console.log(event); //Note: We will be passing the reference of this function and not call it(calling this function will be done later at runtime)
  //We do not have for loop in JSX. In JSX we can only write either HTML or use other components so inorder to write any conditions or loops from JS we can include the piece of code in {JS code goes in here}
  return (
    <Fragment>
      <h1 onClick={handleClicked}>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex, index, item, "clicked");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <h1>Form Controls</h1>
      <FormControls />
    </Fragment>
  );
}

// function ListGroup() {
//   return (
//     <div>
//         <h1>List Group</h1>
//         <ul className="list-group">
//           <li className="list-group-item">An item</li>
//           <li className="list-group-item">A second item</li>
//           <li className="list-group-item">A third item</li>
//           <li className="list-group-item">A fourth item</li>
//           <li className="list-group-item">And a fifth one</li>
//         </ul>
//     </div>
//   );
// }

export default ListGroup;
