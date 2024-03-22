

//Tipo de datos para categorías
export type Category = {
    id: number,
    name: string
}

//Tipo de datos para actividad individual registrada
export type Activity = {
    category: number,
    name: string,
    calories: number
}