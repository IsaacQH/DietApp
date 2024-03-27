import { useEffect, useMemo, useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
import { Form } from "./components/Form"
import { ActivityList } from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(()=>{
      localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length>0, [state.activities]) //Renderiza y regresa un boleano solo cuando existe el canRestartApp

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center"> 
            <img src="src\assets\logo.png" alt="logo" className="mr-2" />
            <h1 className="text-lg font-bold text-gray-700 uppercase">Diet App ®</h1>
          </div>
          <div>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl mr-10 uppercase disabled:opacity-20 disabled:bg-gray-600"
              onClick={() => dispatch({type:'restart-app'})}
              disabled={!canRestartApp()  /*Solo funciona cuando esta en falso y no hay activities*/}
            >
              Restart App
            </button>
          </div>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch = {dispatch}
            state = {state}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities = {state.activities}
          dispatch = {dispatch}
        />
      </section>

    </>
  )
}

export default App
