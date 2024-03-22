
import { categories } from "../data/categories"


export const Form = () => {
  return (
    <form
        className="space-y-5 bg-gray-700 shadow p-10 rounded-3xl text-white"
    >
        {/* DIV DEL INPUT SECTION */}
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Category: </label>
            <select
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                id="category"
            >
                {categories.map( (category) => (
                    <option key = {category.id}>
                        {category.name}
                    </option>
                ))}

            </select>
        </div>

        {/* DIV DEL INPUT NAME */}
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity">Name: </label>
            <input
                id="activity"
                placeholder="Activity or Food"
                type="text"
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                
            >
            </input>
        </div>

         {/* DIV DEL INPUT CALORIES */}
         <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories">Calories: </label>
            <input
                id="activity"
                placeholder="Number of calories"
                type="number"
                className="border border-slate-500 p-2 rounded-lg w-full bg-gray-600"
                
            >
            </input>

             {/* SUBMIT */}
             <input 
                type="submit"
                className="bg-gray-800 hover:bg-slate-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-md mt-5"
                value="Add calories"
            />
        </div>
    </form>
  )
}
