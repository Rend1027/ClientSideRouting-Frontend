import React from "react";
import TaskList from "./TaskList";

const CompletedTasks = ({ tasks, fetchAllTasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  return <TaskList tasks={completedTasks} fetchAllTasks={fetchAllTasks} />;
};

export default CompletedTasks;