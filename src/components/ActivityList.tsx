import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"

type ActivityListProps = {
    activities: Activity[]
}

export const ActivityList = ({activities}:ActivityListProps) => {

    //Esta función usa use Memo y recibe el category cada que use memo se activa por haber modificado el valor de activities
    const categoryName = useMemo(() => (category:Activity['category']) => (
            categories.map((cat) => cat.id === category ? cat.name : '')
        )  //Revisa que el entry sea igual al cat de categories (objeto definido) luego es regresado el nombre
    , [activities])  

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Resume of your register</h2>

            {activities.map((activity) => (
                <div key = {activity.id} className="px-5 py-10 bg-gray-700 text-white mt-5 flex justify-between rounded-lg">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-lime-500": "bg-orange-500"}`}>{categoryName(+activity.category)}</p>
                        <p className="text-2xl font-bold pt-5">{activity.name}</p>
                        <p className={`font-black text-4xl ${activity.category === 1 ? "text-lime-500" : "text-orange-500"}`}>
                            {activity.calories} <span> Calories</span>
                        </p>
                    </div>

                    <div>

                    </div>
                </div>
            ))}

        </>
    )
    }
