import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Get all tasks
export const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new task
export const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

// Update a task
export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
