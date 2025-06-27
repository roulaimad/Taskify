import React from "react";
import { X } from "lucide-react";

function TaskItem({ title, status, onDelete, onStatusChange }) {
  // Status style mapping
  const statusStyles = {
    "To Do":
      "text-gray-700 bg-gray-100 border-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600",
    "In Progress":
      "text-blue-700 bg-blue-100 border-blue-300 dark:text-blue-400 dark:bg-blue-950 dark:border-blue-600",
    Done: "text-green-700 bg-green-100 border-green-300 dark:text-green-400 dark:bg-green-950 dark:border-green-600",
  };

  return (
    <li className="flex items-center justify-between gap-4 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
      {/* Title */}
      <span className="text-gray-800 dark:text-gray-200 text-base font-medium flex-1 truncate">
        {title}
      </span>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className={`text-sm px-3 py-1.5 rounded-full border font-medium appearance-none bg-no-repeat bg-right focus:outline-none ${statusStyles[status]}`}
        style={{
          backgroundImage: "none",
          minWidth: "130px",
          textAlign: "center",
        }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="text-gray-400 hover:text-red-500 transition"
      >
        <X size={18} />
      </button>
    </li>
  );
}

export default TaskItem;
