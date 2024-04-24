export default function Heading(props: any) {
    const headingStyles = {
        border: "2px solid black",
    }
    return (<><h1 style={headingStyles}>This is an h1 heading</h1>
        <h2>{props.title}</h2>
    </>);
}