import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import CompletedTasks from "./components/CompleteTasks";
import TaskDetail from "./components/SingleTask";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SingleTask from "./components/SingleTask";
import api from "./api/axiosInstance";

const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await api.get(`/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />}/>
        {/* Currently, we don't have any routes defined. And you can see above that we're
            rendering the TaskList and AddTask components directly, no matter what our URL looks like.
            Let's fix that! */}
        <Route path="/add-task" element = {<AddTask fetchAllTasks={fetchAllTasks} />}></Route>
        <Route path="/completed" element = {<CompletedTasks/>}></Route>
        <Route path="/tasks/:id" element = {<SingleTask/>}></Route>
      </Routes>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
