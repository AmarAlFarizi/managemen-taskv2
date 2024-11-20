import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <input
        type="text"
        placeholder="Add a new task ..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-3/4 p-2 text-sm rounded-lg bg-gray-700 text-white placeholder-gray-500 outline-none border-2 border-violet-500 focus:border-violet-700"
      />
      <button
        onClick={handleAdd}
        className="bg-violet-500 p-1 rounded-full border border-violet-600 text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-violet-600 transition duration-200"
      >
        <span className="font-bold">+</span>
      </button>
    </div>
  );
};

export default AddTaskForm;
