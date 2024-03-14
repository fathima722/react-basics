//Naming convention used here is PascalCasing(first letter of each word should be capital) 
function Message() {
    // JSX (JavaScript XML)
    const frontPart = 'Hi, I am a';
    if(frontPart.length > 25){
        const lastPart = 'Welcome to my world!';
        return <h1>{frontPart} Basic Component. {lastPart}</h1>; //This HTML code will be converted to javascript code under the hood (you can verify it on babeljs.io/repl)
    }
    return <h1>{frontPart} Basic Component</h1>;
}

//To use this component, we need to export it as a default object from this module
export default Message;