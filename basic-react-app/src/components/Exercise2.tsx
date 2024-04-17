import { useState } from "react";

//Same as exercise1 example but with using function component and useState hook here (No css applied)
const Exercise2 = () => {
    const [name,setName] = useState("");
    const [myName,setMyName] = useState("");

    const handleChange = (e: { target: { value: string; }; }) => {
        setName(() => {
            return e.target.value;
        })
    }

    const handleClick = () => {
        setMyName(()=>{
            return name;
        });
        setName(() => {
            return ''
        })
    }
    return (
    <>
    <div>
        <label>Name:</label><br />
        {/* <span style={{display:"flex"}}> */}
        <input type="text" className="form-control" style={{margin: "5px"}} value={name} onChange={handleChange}></input>
        {/* <button type="button" className="btn btn-dark" style={{margin: '10px 0'}} onClick={handleClick}>Submit</button></span> */}
        <p>{myName} is the best girl</p>
    </div>
    </>);
}

export default Exercise2;