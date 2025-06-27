import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import React from "react";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Taskify
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
