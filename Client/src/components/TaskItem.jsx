import React from "react";

function TaskItem({ title }) {
  return (
    <li className="flex justify-between items-center border border-gray-300 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
      <span className="text-gray-800 font-medium">{title}</span>
      <button className="text-red-500 hover:underline font-semibold">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
