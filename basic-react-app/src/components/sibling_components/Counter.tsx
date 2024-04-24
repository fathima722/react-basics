import { useMealsListContext } from "./provider/MealsProvider";

const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h5>Number of meals today: {meals.length}</h5>
        </div>
    )
}
