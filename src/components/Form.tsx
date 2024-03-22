import { useState } from "react"

import { categories } from "../data/categories"
import { Activity } from "../types"


export const Form = () => {

    const [activity, setActivity] = useState<Activity>({
        category: 1,   //Registra el id de ctegory default 1
        name: '',
        calories: 0
    })

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
