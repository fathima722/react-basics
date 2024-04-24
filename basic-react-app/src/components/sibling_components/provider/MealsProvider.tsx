import { createContext, useContext, useState } from "react";

const MealsContext = createContext({});
const todaysMeals = ['Cauliflower Roast', 'Garlic Bread', 'Baked Beans'];
const MealsProvider = ({children}: any) => {
    const [meals, setMeals] = useState(todaysMeals);
    return <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
}
export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider;