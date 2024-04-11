// import FaTrash from "react-icons";
import { UpdateTask } from "./updateTask";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

export const TaskItem = ({
    task,
    handleCompleteTask,
    handleUpdateTask,
    handleDeleteTask,
}) => {
    return (
        <li className="todolist__item">
            <span onClick={() => handleCompleteTask(task.id)}>
                <label
                    className={`todolist__item-complete ${
                        task.completed ? "todolist__item-complete--active" : ""
                    }`}
                >
                    {task.completed && (
                        <FaCheck
                            style={{ color: "white", paddingLeft: "3px" }}
                        />
                    )}
                </label>
            </span>

            <UpdateTask task={task} handleUpdateTask={handleUpdateTask} />
            <button
                className="todolist__delete-button"
                onClick={() => handleDeleteTask(task.id)}
            >
                <FaRegTrashAlt />
            </button>
        </li>
    );
};
