import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          onDelete={() => onDelete(task._id)}
        />
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}
    </ul>
  );
}

export default TaskList;
