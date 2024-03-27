import { useMemo } from "react"
import { Activity } from "../types"
import { DisplayRecord } from "./DisplayRecord"

type CalorieTrackerProps = {
    activities: Activity[]
}

export const CalorieTracker = ({activities}:CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => (activity.category === 1 ) ? total + activity.calories : total, 0), [activities]) //Queremos que siempre renderice cada que activities cambie

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => (activity.category === 2 ) ? total + activity.calories : total, 0), [activities]) //Queremos que siempre renderice cada que activities cambie

    const totalCalories = useMemo(() => caloriesBurned - caloriesConsumed , [activities])


    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Calorie Records</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
                
                <DisplayRecord
                    calories = {caloriesConsumed}
                    text = "Consumed"
                />

                
                <DisplayRecord
                    calories = {totalCalories}
                    text = "Result"
                />

                <DisplayRecord
                    calories = {caloriesBurned}
                    text = "Burned"
                />


            </div>

        </>
    )
}
