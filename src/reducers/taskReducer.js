export const taskReducer = (initialState, action) => {

    switch (action.type) {
        case 'Add':
            return [...initialState, action.payload]
            
        case 'Delete':
            return initialState.filter(task => task.id !== action.payload)
            
        case 'Complete':
            return initialState.map(task => {
                if (task.id === action.payload) {
                    return {...task,
                        completed: !task.completed
                    }
                }

                return task
            })
                
        case 'Update':
            return initialState.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        description: action.payload.description,
                    }
                }

                return task
            })
                    
        default:
            return initialState
            
    }
}