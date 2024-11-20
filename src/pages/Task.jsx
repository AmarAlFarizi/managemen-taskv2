import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm';
import TaskCard from '../components/TaskCard';
import TaskDoneSection from '../components/TaskDoneSection';
import ProfileSection from '../components/ProfileSection';
import CountTasks from '../components/CountTasks';
import { useAuthStore } from '../store/authStore';
import { useProfileStore } from '../store/profileStore';
import { useTaskStore } from '../store/taskStore';

const Task = () => {
  const logout  = useAuthStore((state) => state.logout);
  const profile = useProfileStore((state) => state.profile);
  const {tasks, getTasks} = useTaskStore();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleAddTask = () => {
    // TODO toogle task
  };
  const toggleTask = () => {
    // TODO toogle task
  };

  const deleteTask = () => {
    // TODO delete task
  };

  const incompleteTasks= tasks.filter((task) => !task.isDone)
  // console.log('tasks', tasks);
  const completeTasks= tasks.filter((task) => task.isDone)

  const navigate = useNavigate();
  
  const handleDoneTask = () => {
    navigate('/update-profile');
  };
  const handleDeleteTask = () => {
    navigate('/update-profile');
  };

  const handleEditProfile = () => {
    navigate('/update-profile');
  };

  const handleSignOut = () => {
    logout(); 
    navigate('/login');
  };

  return (
    <div className="flex space-x-4 p-6 bg-gray-900 min-h-screen">
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg flex justify-center items-center">
        <ProfileSection user={profile} onEditProfile={handleEditProfile} onSignOut={handleSignOut} />
      </div>
      <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
        <AddTaskForm onAddTask={handleAddTask} />

        <div className="mt-10">
          <CountTasks count={tasks.length} />
        </div>

        <div className="space-y-4 mt-8">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDone={handleDoneTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks to do.</p>
          )}
        </div>

       {}
        {completeTasks.length > 0 && (
          <div className="mt-10">
            <TaskDoneSection tasks={completeTasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;