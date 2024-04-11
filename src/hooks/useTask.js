import { useEffect, useReducer} from 'react'
import { taskReducer } from '../reducers/taskReducer'

export const useTask = () => {

    const initialState = []

    // Get all tasks from the localStorage 
    const init = () => {
        return JSON.parse(localStorage.getItem("tasks")) || []
    }

    const [tasks, dispatch] = useReducer(taskReducer, initialState, init) 

    // Create tasks counters (Only informative)
    const completedTasks = tasks.filter(task => task.completed).length
    const pendingTasks = tasks.filter(task => !task.completed).length

    // Update localStorage when the state of the tasks changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }, [tasks])


    // Send an action to taskReducer. The action will add a new task.
    const handleNewTask = task => {
        const action = {
            type: "Add",
            payload: task,
        }
        
        dispatch(action)
    }

    // Send an action to taskReducer. The action will delete a task.
    const handleDeleteTask = id => {
        const action = {
            type: "Delete",
            payload: id,
        }
        
        dispatch(action)
    }

    // Send an action to taskReducer. The action will complete a task.
    const handleCompleteTask = id => {
        const action = {
            type: "Complete",
            payload: id,
        }

        dispatch(action)
    }

    // Send an action to taskReducer. The action will update an existing task.
    const handleUpdateTask = (id, description) => {
        const action = {
            type: "Update",
            payload: {
                id,
                description
             }
        }

        dispatch(action)
    }

    return {
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
        tasks,
        completedTasks,
        pendingTasks
    }
}