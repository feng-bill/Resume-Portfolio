// import Action Type from file .types
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './types'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return {
        type: ADD_TODO, 
        text
    }
}
// export const addTodo = text => dispatch => {
//     dispatch({
//         type: ADD_TODO, 
//         text
//     })
// }

export function removeTodo(text) {
    return {
        type: REMOVE_TODO, 
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER, 
        filter
    }
}