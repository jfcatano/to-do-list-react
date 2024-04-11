import { useForm } from "../hooks/useForm";

export const NewTask = ({ handleNewTask }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (description.length <= 1) return;

        let newTask = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        handleNewTask(newTask);
        onResetForm();
    };

    return (
        <form className="todolist__form" onSubmit={onFormSubmit}>
            <input
                type="text"
                className="todolist__newtask-input"
                name="description"
                value={description}
                onChange={onInputChange}
                placeholder="What's next to do?"
            />
            <button className="todolist__newtask-button" type="submit">
                Add
            </button>
        </form>
    );
};
