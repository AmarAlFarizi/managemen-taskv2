import React from 'react';

const CountTasks = ({ count }) => (
  <div className="flex justify-center mt-8">
    <h3 className="text-white text-lg">Tasks to do - {count}</h3>
  </div>
);

export default CountTasks;
