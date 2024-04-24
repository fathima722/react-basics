export default function Btn(){
    // Function Expression
    const clickHandler = () => console.log('Clicked');
    // Function Declaration
    function doSomething() {
        console.log('Do Something has been clicked');
    }
    return (
        <>
            {/* Handling event clicks with inline anonymous ES5 function */}
            <button onClick={function() {console.log('first example')}}>An inline anonymous ES5 function event handler</button>
            {/* Handling events with inline anonymous ES6 function */}
            <button onClick={() => console.log('second example')}>An inline anonymous ES6 function event handler</button>
            {/* Handling events with separate ES5 function declaration */}
            <button onClick={doSomething}>Do Something</button>
            {/* Handling events using a separate function expression. */}
            <button onClick={clickHandler}>Click Me</button>
        </>
    )
}