import { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

import { MdEdit } from "react-icons/md";

export const UpdateTask = ({ task, handleUpdateTask }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: task.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = (e) => {
        e.preventDefault();

        const id = task.id;
        const description = updateDescription;

        handleUpdateTask(id, description);

        setDisabled(!disabled);

        focusInputRef.current.focus();
    };

    return (
        <form className="todolist__update-form" onSubmit={onSubmitUpdate}>
            <input
                type="text"
                className={`todolist__update-input ${
                    task.completed ? "todolist_update-input-dashed" : ""
                }`}
                name="updateDescription"
                onChange={onInputChange}
                value={updateDescription}
                placeholder="What's next to do?"
                readOnly={disabled}
                ref={focusInputRef}
            />
            <button className="todolist__update-button" type="submit">
                <MdEdit />
            </button>
        </form>
    );
};
