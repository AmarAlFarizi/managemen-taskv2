import React from 'react';

const TaskDoneSection = ({ tasks }) => (
  <div className="mt-6">
    <h3 className="text-white text-lg mb-2 text-center">Done - {tasks.length}</h3>
    <div className="space-y-2 flex flex-col items-center">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-3 bg-gray-700 rounded-lg text-white flex items-center justify-center"
        >
          <span className="line-through text-green-500">{task.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TaskDoneSection;
