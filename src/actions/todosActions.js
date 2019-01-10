//defined switch statement actions
export const GET_TODOS = 'GET_TODOS'
export const POST_TODOS = 'POST_TODOS'
export const PUT_TODOS = 'PUT_TODOS'
export const PATCH_TODOS = 'PATCH_TODOS'
export const DELETE_TODOS = 'DELETE_TODOS'

//defined actions
export const getTodos = () => { 
    return {
        type: 'GET_TODOS',
        payload: [  
            { 
                id : 1, 
                text : 'Have fun with' ,
                timestamp: '01/22/19 9:14 am pst' 
            },
            { 
                id : 2, 
                text : 'Have fun with' ,
                timestamp: '01/23/19 9:14 am pst' 
            },
            { 
                id : 3, 
                text : 'Have fun with' ,
                timestamp: '01/24/19 9:14 am pst' 
            }
        ]
    }
}

export const postTodos = () => { 
    return {
        type: 'POST_TODOS',
        payload:  [  
            { 
                id : 4, 
                text : 'Have fun with' ,
                timestamp: '01/25/19 9:14 am pst' 
            },
            { 
                id : 5, 
                text : 'Have fun with' ,
                timestamp: '01/26/19 9:14 am pst' 
            },
            { 
                id : 6, 
                text : 'Have fun with' ,
                timestamp: '01/27/19 9:14 am pst' 
            }
        ]
    }
}

export const putTodos = () => { 
    return {
        type: 'PUT_TODOS',
        payload: []
    }
}

export const patchTodos = () => { 
    return {
        type: 'PATCH_TODOS',
        payload: []
    }
}

export const deleteTodos = () => { 
    return {
        type: 'DELETE_TODOS',
        payload: []
    }
}