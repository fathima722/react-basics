import Counter from "./Counter";
import MealsList from "./MealsList";
import MealsProvider from "./provider/MealsProvider";

export default function Parent(){
    return (<MealsProvider>
        <MealsList/>
        <Counter/>
    </MealsProvider>);
}