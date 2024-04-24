import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext } from "react";
import { useMealsListContext } from "./provider/MealsProvider";
const MealsList = () => {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined,index: Key | null | undefined) => {
                <h2 key={index}>{meal}</h2>
            })}
        </div>
    )
}
export default MealsList;