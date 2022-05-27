import { ADD_TODO, REMOVE_TODO, SET_TODO, UPDATE_TODO, SET_ID_UPDATE} from "./constants"
export const setTodo = (payload) => {
    return {
        type: SET_TODO,
        payload
    }
}
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
export const setIdUpdate = (payload) => {
    return {
        type: SET_ID_UPDATE,
        payload
    }
}
export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}
