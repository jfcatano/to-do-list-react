import React from "react";
import { TaskItem } from "./taskItem";

export const TaskList = ({
    tasks,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteTask,
}) => {
    return (
        <ul className="todolist__list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleCompleteTask={handleCompleteTask}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                />
            ))}
        </ul>
    );
};
