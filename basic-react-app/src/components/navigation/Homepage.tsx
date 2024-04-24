import furniture1 from './../../assets/images/furniture1.jpeg';
// import ReactPlayer from "react-player"; - To get the entire package's functionality use this import statement
import ReactPlayer from "react-player/youtube"; // To get videos from a specific site(here - youtube) to reduce bundle size, use an import like this.
export default function Homepage() {
    return (
    <>
        <h3>Welcome to My Website!!!!!!!!!!</h3>
        <img height={200} src={furniture1} alt="The furniture1 image couldn't load" />
        <MyVideo/>
    </>
    );
}

const MyVideo = () => {
    return <ReactPlayer width={200} height={200} style={{position: 'fixed', bottom: 10,right: 10}} playing={false} volume={0.1} url="https://www.youtube.com/watch?v=lcZW43hUlzc" />
}