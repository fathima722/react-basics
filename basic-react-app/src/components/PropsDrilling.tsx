
// To avoid prop drilling which could be hideous when we have large and complex code, we can manage state more efficiently with the use of context API and useContext, userReducer hooks found in context API.
// Using context API we can pass the state from parent component to a targeted child component directly unlike prop drilling which requires the state to be passed through multiple child components inorder to be used in a targeted child component.
// Example of passing props from parent to child to grandchild components:
export default function PropsDrilling() {
    return <Header msg='I am a message passed through the header component to wrapper component to button component' />;
}
function Header(props) {
    return <Main message={props.msg} />;
}
function Main(props) {
    return <Button myMessage={props.message} />
}
function Button(props) {
    const myStyles = {
        border: '2px solid brown',
        color: 'brown',
        borderRadius: '10px'
    }
    return <div>
        <span> Click me to learn about prop drilling: <button onClick={() => alert(props.myMessage)} style={myStyles}>Prop Drilling</button> </span></div>
}
