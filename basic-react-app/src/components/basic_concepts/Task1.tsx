export default function Task1() {
    function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        if(Number(userInput) > 3 || Number(userInput) < 1) {
            alert('The number you enter should be in the range on 1 and 3 including');
        }
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }
    return (
        <>
            <h1>“Task: Add a button and handle a click event”</h1>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>
        </>
    )
}