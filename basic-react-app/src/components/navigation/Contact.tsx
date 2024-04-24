import furniture2 from './../../assets/images/furniture2.jpeg'
const Contact = () => {
    const randomImage = "https://picsum.photos/300/200?random"
    return (
    <>
        <h5>Contact Little Apple on this page!!!!!!!!!!</h5>
        {/* using an asset by name reference (import the file using a name and included here in src) */}
        <img height={200} width={300} src={furniture2} alt="couldn't load furniture2 image" /> 
        {/* Can also be written as follows using Path reference while using create-react-app*/}
        {/* <img src={require("./../../assets/images/furniture2.jpeg")} alt="The furniture2 image couldn't load" /> */}
        <img style={{marginLeft: '10px'}} src={randomImage} alt="A random Image couldn't be loaded"/>
    </>)
}

export default Contact;