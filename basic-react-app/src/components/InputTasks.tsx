import { Fragment, useState } from "react";

//using a sting array with useState hook
export default function InputTasks() {
    const [items, setItems] = useState<string[]>([]);
    const [input, setInput] = useState<string[]>([]);

    const handleChange = (e: { target: { value: string; }; }) => {
        setInput(() => {
            return [e.target.value];
        })
    }

    const addItem = () => {
        setItems((prevItems) => [...prevItems].concat(input));
        setInput(() => []);
    };

    const removeItem = (index: number) => {
        setItems(()=> {
            if(items.length > 0) {
                const firstHalf = items.splice(index,1);
                console.log("first: ",firstHalf);
                return items;
            }
            return [];
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}></input>
            <button onClick={addItem}>Add a Task</button>
            {/* <ul>
                {items.map((item: string) => (
                    <li key={item}>Value: {item}</li>
                ))}
            </ul> */}
            {/* <button onClick={removeItem}>Delete a Task</button> */}
            <ul>
                {items.map((x: string,index: number) => {
                    return (<Fragment><li>Value: {x}</li><button onClick={() => removeItem(index)}>Delete a Task</button></Fragment>)
                })}
            </ul>
        </div>
    );
}