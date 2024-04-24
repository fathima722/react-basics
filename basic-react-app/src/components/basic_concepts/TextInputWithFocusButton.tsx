import { useRef } from "react";

// When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.
// Using the ref attribute on the input element, I can then access the current value and invoke the focus() method on it, thereby focusing the input field.
// There are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play.
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
     console.log(inputEl);
     inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

  export default TextInputWithFocusButton;
  