import { useEffect, useReducer} from 'react'
import { taskReducer } from '../reducers/taskReducer'

export const useTask = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem("tasks")) || []
    }

    const [tasks, dispatch] = useReducer(taskReducer, initialState, init) 

    const taskCount = tasks.filter(task => task.completed).length
    const pendingTasks = tasks.filter(task => !task.completed).length

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }, [tasks])


    const handleNewTask = task => {
        const action = {
            type: "Add",
            payload: task,
        }
        
        dispatch(action)
    }

    const handleDeleteTask = id => {
        const action = {
            type: "Delete",
            payload: id,
        }
        
        dispatch(action)
    }

    const handleCompleteTask = id => {
        const action = {
            type: "Complete",
            payload: id,
        }

        dispatch(action)
    }

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
        taskCount,
        pendingTasks
    }
}