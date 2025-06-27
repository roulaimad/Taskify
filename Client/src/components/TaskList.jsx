import React from "react";
import TaskItem from "./TaskItem";

const dummyTasks = [
  { _id: "1", title: "Buy groceries" },
  { _id: "2", title: "Complete React project" },
  { _id: "3", title: "Read a book" },
];

function TaskList() {
  return (
    <ul className="space-y-3">
      {dummyTasks.map((task) => (
        <TaskItem key={task._id} title={task.title} />
      ))}
    </ul>
  );
}

export default TaskList;
