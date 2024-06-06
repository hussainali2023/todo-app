import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodo } from '../redux/features/todoSlice';
import toast from 'react-hot-toast';

const TaskInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault();
   
    dispatch(addTodo(todo))
   //  console.log(todo);
    setTodo(''); // Clear the input field after adding the task
  toast.success("Todo Added")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 m-4">
      <div className="md:w-1/2 mx-auto px-8 py-8 md:px-16 md:py-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl">
      
        <div className="bg-white shadow-lg px-6 py-6 md:px-10 md:py-10 rounded-xl">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              name="todo"
              value={todo}
              required
              onChange={(e) => setTodo(e.target.value)}
              placeholder="What would you like to do ?"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <div className=' flex justify-between'>
            <div className="flex justify-center mt-6 md:mt-6">
              <button type="submit" className=" text-sm bg-gradient-to-r from-violet-500 to-pink-500 px-4 md:px-10 py-3 text-white font-bold rounded-md">
                Add
              </button>
            </div>
            <div className="flex justify-center mt-6">
              <Link to={"/"} type="submit" className="bg-gradient-to-r from-violet-500 to-pink-500 px-4 md:px-10 py-3 text-white font-bold rounded-md">
                View All Todo
              </Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
