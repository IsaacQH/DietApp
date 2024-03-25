import { Activity } from "../types"


export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Activity}}


//Definimos un tipo de dato y lo hacemos localmente para llamar un array de Activity, importamos el tipo de dato.
type ActivityState = {
    activities: Activity[]
}

//Le damos el initial state según el tipo de dato ActivityState, arreglo vacio
export const initialState: ActivityState = {
    activities: []

}

//Le pasamos al reducer el state y las acciones
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        //console.log(action.payload.newActivity)

        return {
            ...state,    //Toma la copia inicial de todos los states defindos en el ActivityState
            activities: [...state.activities, action.payload.newActivity] //Registra la nueva actividad en activities y también la copia de las anteriores
        }
    }

    return state
}