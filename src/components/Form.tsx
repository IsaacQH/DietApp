import { useState, Dispatch, useEffect } from "react"

import { categories } from "../data/categories"
import type { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"

import {v4 as uuidv4} from 'uuid'

type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState:Activity = {
    id: uuidv4(),
    category: 1,   //Registra el id de ctegory default 1
    name: '',
    calories: 0
}

export const Form = ({dispatch, state}:FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.actID){
            const selectedActivity = state.activities.filter((stateActivity) => stateActivity.id === state.actID)[0] //Busca que la actividad registrada sea la misma que la del actID, regresa el primer objeto encontrado
            setActivity(selectedActivity)  //Setea al activity encontrado
        }
    },[state.actID])

    function handleChange(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>){

        const isNumberfile = ['category','calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id] : isNumberfile ? Number(e.target.value) : e.target.value
        })
    }

    function isValidActivity(){
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("REGISTRANDO ACTIVIDAD")

        dispatch({type:"save-activity", payload:{newActivity:activity}})

        setActivity({...initialState, id:uuidv4()})
    }

  return (
    <form
        className="space-y-5 bg-gray-700 shadow p-10 rounded-3xl text-white"
        onSubmit={handleSubmit}
    >
        {/* DIV DEL INPUT SECTION */}
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Category: </label>
            <select
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                id="category"
                value = {activity.category}
                onChange={handleChange}
            >
                {categories.map( (category) => (
                    <option key = {category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}

            </select>
        </div>

        {/* DIV DEL INPUT NAME */}
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                placeholder="Activity or Food"
                type="text"
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                value = {activity.name}
                onChange={handleChange}
            >
            </input>
        </div>

         {/* DIV DEL INPUT CALORIES */}
         <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories">Calories: </label>
            <input
                id="calories"
                placeholder="Number of calories"
                type="number"
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                value = {activity.calories}
                onChange={handleChange}
            >
            </input>

             {/* SUBMIT */}
             <input 
                type="submit"
                className="bg-gray-800 hover:bg-slate-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-md mt-5 disabled:cursor-not-allowed disabled:bg-gray-500"
                value={!isValidActivity() ? "Fill Records" : "Add New"}
                disabled={!isValidActivity()}
            />
        </div>
    </form>
  )
}
