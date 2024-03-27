import type { Activity } from "../types"
import { categories } from "../data/categories"
import { Dispatch, useMemo } from "react"
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import {XCircleIcon} from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducers/activityReducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export const ActivityList = ({activities, dispatch}:ActivityListProps) => {

    //Esta función usa use Memo y recibe el category cada que use memo se activa por haber modificado el valor de activities
    const categoryName = useMemo(() => (category:Activity['category']) => (
            categories.map((cat) => cat.id === category ? cat.name : '')
        )  //Revisa que el entry sea igual al cat de categories (objeto definido) luego es regresado el nombre
    , [activities])  

    const isEmtyActivities = useMemo(() => activities.length>0 ? "Resume of your register" : "Add some items",[activities] )

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center mb-10">
                {isEmtyActivities}
            </h2>

            {activities.map((activity) => (
                <div key = {activity.id} className="px-5 py-10 bg-gray-700 text-white mt-5 flex justify-between rounded-lg">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-lime-500": "bg-orange-500"}`}>{categoryName(+activity.category)}</p>
                        <p className="text-2xl font-bold pt-5">{activity.name}</p>
                        <p className={`font-black text-3xl ${activity.category === 1 ? "text-lime-500" : "text-orange-500"}`}>
                            {activity.calories} <span> Calories</span>
                        </p>
                    </div>

                    <div className="flex gap-5 items-center">
                        <button>
                            <PencilSquareIcon
                                className="h-8 w-8 text-white"
                                onClick={() => dispatch({type: 'set-actID', payload: {id: activity.id}})}
                            />
                        </button>

                        <button>
                            <XCircleIcon
                                className="h-9 w-9 text-red-600"
                                onClick={() => dispatch({type: 'delete-activity', payload: {id: activity.id}})}
                            />
                        </button>
                    </div>
                </div>
            ))}

        </>
    )
    }
