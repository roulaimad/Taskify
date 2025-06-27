import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import React, { useState, useEffect } from "react";
import api from "./api";
import { Toaster, toast } from "react-hot-toast";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
      console.log("Fetched tasks:", res.data);
    } catch (err) {
      toast.error("Failed to load tasks");
    }
  };

  const addTask = async (title) => {
    try {
      const res = await api.post("/tasks", { title });
      setTasks((prev) => [...prev, res.data]);
      toast.success("Task added");
    } catch (err) {
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      toast.success("Task deleted");
    } catch (err) {
      toast.error("Failed to delete task");
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const res = await api.patch(`/tasks/${id}`, { status: newStatus });
      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, status: res.data.status } : task
        )
      );
      toast.success("Status updated");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      <ThemeToggle />
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border dark:border-gray-700 transition-all duration-300">
        <h1 className=" font-saira text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">
          Taskify
        </h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onStatusChange={updateTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;
