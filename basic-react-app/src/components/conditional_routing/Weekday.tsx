export default function Weekday(){
    const time = new Date();
    const morning = time.getHours() >= 6 && time.getHours() <= 16;
    return (
    <>
        <h5>Today is a workday.Please get the work done.</h5>
        {morning && <h6>Don't forget to eat your breakfast though!</h6>}
    </>
    )
}