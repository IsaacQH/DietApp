import { Activity } from "../types"


export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Activity}} |
    {type: 'set-actID', payload: {id: Activity['id']}} |
    {type: 'delete-activity', payload: {id: Activity['id']}}


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
        
        let updatedActivities:Activity[] = [] //Inicia el arreglo que se pasará

        if(state.actID){    //Si existe es porque estamos editando
            updatedActivities = state.activities.map((activity) => activity.id === state.actID ? action.payload.newActivity : activity) //itera y regresa el arreglo de activities, solo revisa el modificado y regresa el update

        } else{    //
            updatedActivities = [...state.activities, action.payload.newActivity] //Registra la nueva actividad en activities y también la copia de las anteriores
        }
        
        return {
            ...state,    //Toma la copia inicial de todos los states defindos en el ActivityState
            activities: updatedActivities,  //Guarda el arreglo indicado 
            actID: ''     //Reinicia el update y quita el id registrad
        }
    }


    if(action.type === 'set-actID'){
        return {
            ...state,      //Se usa para no borrar los estados de los demas states
            actID: action.payload.id  //Registra el id capturado por el action
        }
    }

    if(action.type === 'delete-activity'){
        console.log("Deleting")
        return{
            ...state,    //Toma la copia inicial de todos los states defindos en el ActivityState
            activities: state.activities.filter(activity => activity.id !== action.payload.id),  //Guarda el arreglo indicado 
        }
    }


    return state
}