import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
    return (
        <div className="container">
            <h1>📝 To-Do List</h1>
            <TaskForm refreshTasks={() => {}} />
            <TaskList />
        </div>
    );
};

export default Home;
