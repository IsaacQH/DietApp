import { Activity } from "../types"


export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Activity}} |
    {type: 'set-actID', payload: {id: Activity['id']}}


//Definimos un tipo de dato y lo hacemos localmente para llamar un array de Activity, importamos el tipo de dato.
export type ActivityState = {
    activities: Activity[],
    actID: Activity['id']      // O podemos poner string
}

//Le damos el initial state según el tipo de dato ActivityState, arreglo vacio
export const initialState: ActivityState = {
    activities: [],
    actID: ''         //Guarda el id para ediciones
}

//Le pasamos al reducer el state y las acciones
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){  //Guarda en state de activities  console.log(action.payload.newActivity)
        return {
            ...state,    //Toma la copia inicial de todos los states defindos en el ActivityState
            activities: [...state.activities, action.payload.newActivity] //Registra la nueva actividad en activities y también la copia de las anteriores
        }
    }


    if(action.type === 'set-actID'){
        return {
            ...state,      //Se usa para no borrar los estados de los demas states
            actID: action.payload.id  //Registra el id capturado por el action
        }
    }


    return state
}