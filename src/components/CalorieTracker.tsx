import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProps = {
    activities: Activity[]
}

export const CalorieTracker = ({activities}:CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => (activity.category === 1 ) ? total + activity.calories : total, 0), [activities]) //Queremos que siempre renderice cada que activities cambie

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => (activity.category === 2 ) ? total + activity.calories : total, 0), [activities]) //Queremos que siempre renderice cada que activities cambie



    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Calorie Records</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
                
                <p className="text-white font-bold rounded-full grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange-500">{caloriesConsumed}</span>
                    <p className="mt-2">Consumed</p>
                </p>

                <p className="text-white font-bold rounded-full grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-lime-500">{caloriesBurned}</span>
                    <p className="mt-2">Burned</p>
                </p>

            </div>

        </>
    )
}
