import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import React, { useState, useEffect } from "react";
import api from "./api";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
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

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Taskify
        </h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
