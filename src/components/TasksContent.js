import React from "react";

// Components

import TasksCategory from "./TasksCategory";

// Styles

import "./TasksContent.css";

const TasksContent = ({ arrData, setArrData }) => {
  const { data } = arrData;

  let tasksUncomplete = data.filter((task) => {
    if (!task.done) {
      return task;
    }
  });

  let tasksComplete = data.filter((task) => {
    if (task.done) {
      return task;
    }
  });

  const renderCompleteTasks = () => {
    if (tasksComplete.length > 0) {
      return (
        <TasksCategory
          title="Complete Tasks"
          tasks={tasksComplete}
          setArrData={setArrData}
        />
      );
    }
  };

  return (
    <div className="tasks-content">
      <TasksCategory tasks={tasksUncomplete} setArrData={setArrData} />
      {renderCompleteTasks()}
    </div>
  );
};

export default TasksContent;
