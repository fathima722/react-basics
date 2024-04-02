import { useState } from "react";

//using a sting array with useState hook
export default function InputTasks() {
    const [items, setItems] = useState<string[]>([]);
    const [input,setInput] = useState<string[]>([]);

    const handleChange = (e: { target: { value: string; }; }) => {
        setInput(() => {
            return [e.target.value];
        })
    }

  const addItem = () => {
    setItems((prevItems) => {
        const newArray = [...prevItems].concat(input);
        return newArray;
    });
    setInput(() => [])
  };
  return (
    <div>
        <input type="text" onChange={handleChange}></input>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map((item: string) => (
          <li key={item}>Value: {item}</li>
        ))}
      </ul>
    </div>
  );
}