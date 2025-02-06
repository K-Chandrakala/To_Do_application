import { useState } from "react";
import { addTask } from "../api/tasks";

const TaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        await addTask({ title });
        setTitle("");
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a task..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
