import { GET_TODOS, POST_TODOS, PUT_TODOS, PATCH_TODOS, DELETE_TODOS } from'../actions/todosActions';

export const todosStore = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS:
            return [
                ...state,
                { todos : action.payload }               
            ]
        case POST_TODOS:
            return [
                ...state,
                { todos : action.payload }               
            ]    
        default:
            return state;
    }
}
