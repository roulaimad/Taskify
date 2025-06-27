import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onStatusChange }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          status={task.status}
          onDelete={() => onDelete(task._id)}
          onStatusChange={(newStatus) => onStatusChange(task._id, newStatus)}
        />
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}
    </ul>
  );
}

export default TaskList;
