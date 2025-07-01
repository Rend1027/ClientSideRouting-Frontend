import React from "react";
import TaskList from "./TaskList";

const IncompleteTasks = ({ tasks, fetchAllTasks }) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  return <TaskList tasks={incompleteTasks} fetchAllTasks={fetchAllTasks} />;
};

export default IncompleteTasks;