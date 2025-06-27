import React, { useState } from "react";
import { toast } from "react-hot-toast";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      toast.error("Task title cannot be empty");
      return;
    }
    onAddTask(title);
    setTitle("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="What do you need to do?"
        className="flex-1 px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md transition-all"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;
