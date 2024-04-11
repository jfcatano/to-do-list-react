export const taskReducer = (initialState, action) => {

    switch (action.type) {
        // Create new task
        case 'Add':
            return [...initialState, action.payload]
            
        // Delete existing task
        case 'Delete':
            return initialState.filter(task => task.id !== action.payload)
        
        // Mark task as completed
        case 'Complete':
            return initialState.map(task => {
                if (task.id === action.payload) {
                    return {...task,
                        completed: !task.completed
                    }
                }

                return task
            })
                
        // Update an existing task
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