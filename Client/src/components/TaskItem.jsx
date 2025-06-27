import React from "react";

function TaskItem({ title, status, onDelete, onStatusChange }) {
  return (
    <li className="flex justify-between items-center border border-gray-300 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div>
        <p className="text-gray-800 font-medium">{title}</p>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="mt-1 text-sm border rounded px-2 py-1"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        className="text-red-500 hover:underline font-semibold"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
