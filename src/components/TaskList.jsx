import { useState } from "react";
import editIcon from "../assets/editIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../redux/features/todoSlice";
import toast from "react-hot-toast";

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
    
  };

  const handleDeleteClick = (todo) => {
    setSelectedTodo(todo);
    setIsDeletePopupOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  const closeDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setSelectedTodo(null);
  };

  const confirmDelete = () => {
    dispatch(deleteTodo(selectedTodo.id));
    toast.success("successfully Deleted the todo")
    closeDeletePopup();
  };

  const confirmEdit = () => {
    dispatch(editTodo({
      id: selectedTodo.id,
      todo: selectedTodo.todo,
      
    }));
    toast.success("successfully updated")
    closeModal();
  };

  return (
    <div className="flex m-1 md:m-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-1/2 mx-auto px-20 py-8 md:px-16 md:py-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl">
        {todos.length === 0 ? (
          <div className="bg-white shadow-lg px-4 py-4 md:px-10 md:py-10 my-4 rounded-xl">
            <div>
              <p className="text-center text-2xl font-bold bg-gradient-to-l from-violet-500 to-pink-500 bg-clip-text text-transparent">Your todo list is empty</p>
            </div>
            <br />
            <div className="flex justify-center mt-6">
              <Link to={"/task-input"} className="bg-gradient-to-r from-violet-500 to-pink-500 px-10 py-3 text-white font-bold rounded-md">Add Todo</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center mt-6 bg-white  py-6 rounded-lg">
              <div>
                <p className="text-center text-2xl font-bold bg-gradient-to-l from-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">Your todo list</p>
                <Link to={"/task-input"} className="bg-gradient-to-r from-violet-500 to-pink-500 px-4 md:px-10 py-3 text-white font-bold rounded-md">Add New Todo</Link>
              </div>
            </div>

            {todos.map((todo) => (
              <div key={todo.id} className="bg-white shadow-lg px-6 py-10 my-4 rounded-xl flex justify-between">
                <p className=" w-3/4">{todo.todo}</p>
                <div className="flex gap-2 md:gap-4">
                  <button onClick={() => handleEditClick(todo)}>
                    <img className="w-10" src={editIcon} alt="Edit" />
                  </button>
                  <button onClick={() => handleDeleteClick(todo)}>
                    <img className="w-9" src={deleteIcon} alt="Delete" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
              <input
                type="text"
                value={selectedTodo?.todo || ''}
                onChange={(e) => setSelectedTodo({ ...selectedTodo, todo: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
              <div className="flex justify-end gap-4">
                <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
                <button onClick={confirmEdit} className="bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 text-white font-bold rounded-md">Update</button>
              </div>
            </div>
          </div>
        )}

        {isDeletePopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete this todo?</h2>
              <p className="mb-4">{selectedTodo?.todo}</p>
              <div className="flex justify-end gap-4">
                <button onClick={closeDeletePopup} className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer">Cancel</button>
                <button onClick={confirmDelete} className="bg-red-500 px-4 py-2 text-white font-bold rounded-md cursor-pointer ">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
