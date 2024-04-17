export default function Card(props) {
    return (
    <div className='card-details'>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
    </div>
    );
}