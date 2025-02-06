import { useEffect, useState } from "react";
import { fetchTasks, updateTask, deleteTask } from "../api/tasks";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleToggle = async (task) => {
        await updateTask(task._id, { completed: !task.completed });
        loadTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task._id} className={task.completed ? "completed" : ""}>
                    <span onClick={() => handleToggle(task)}>{task.title}</span>
                    <button onClick={() => handleDelete(task._id)}>❌</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
