import { useState } from 'react';

const TaskInput = () => {
  const [todo, setTodo] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo(''); // Clear the input field after adding the task
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-1/2 mx-auto px-16 py-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl">
        <div className="bg-white shadow-lg px-10 py-10 rounded-xl">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="What would you like to do ?"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <div className="flex justify-center mt-6">
              <button type="submit" className="bg-gradient-to-r from-violet-500 to-pink-500 px-10 py-3 text-white font-bold rounded-md">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
