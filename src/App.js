// import {Component} from "react";
import { useContext, useState } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskContext, { TaskProvider } from "./context/TaskContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
]);

const App = ()=>{
    // const { taskList, addNewTask } = useContext(TaskContext);
    // const [tasks, setTasks] = useState([]);

    return (
        <TaskProvider className="bg-slate-900">
            <RouterProvider router={router} />
        </TaskProvider>
    );
};

// const App = ()=>{
//     return <ToDoScreen />
// }

export default App;