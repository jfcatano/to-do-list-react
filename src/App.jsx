import { useTask } from "./hooks/useTask";

import { NewTask } from "./components/newTask";
import { TaskList } from "./components/taskList";

import "./App.css";

function App() {
    const {
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
        tasks,
        taskCount,
        pendingTasks,
    } = useTask();

    return (
        <>
            <div className="todolist__card">
                <h1>To Do List</h1>
                <div className="todolist__counter">
                    <h3>
                        Completed tasks: <span>{taskCount}</span>
                    </h3>
                    <h3>
                        Pending tasks: <span>{pendingTasks}</span>
                    </h3>
                </div>

                <div className="todolist__newtask">
                    <h3>Create new task</h3>
                    <NewTask handleNewTask={handleNewTask} />
                </div>

                <TaskList
                    tasks={tasks}
                    handleCompleteTask={handleCompleteTask}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                />
            </div>
        </>
    );
}

export default App;
