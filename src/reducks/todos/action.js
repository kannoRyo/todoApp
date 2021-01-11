export const FETCH_TODOS = "FETCH_TODOS"

export const fetchTodosAction = (list)=>{
    return{
        type: "FETCH_TODOS",
        payload: list
    }
}