import { combineReducers } from 'redux';
import { usersStore } from'./usersReducer';
import { todosStore } from'./todosReducer';

export const appStore = combineReducers({
    usersStore,
    todosStore
})

