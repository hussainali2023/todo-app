import { useState } from "react";
import editIcon from "../assets/editIcon.png";
import deleteIcon from "../assets/deleteIcon.png";

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([
   {todo:"hello"},
  {todo:"hii"},
  {todo:"hello"},
  {todo:"hii"},
  {todo:"hello"},
  {todo:"hii"},
  ]);



  

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (todo) => {
    console.log("Delete clicked");
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
    setTodos(todos.filter((t) => t !== selectedTodo));
    closeDeletePopup();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-1/2 mx-auto px-16 py-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white shadow-lg px-6 py-6 my-4 rounded-xl flex justify-between"
          >
            <p className="w-3/4">{todo.todo}</p>
            <div className="flex gap-4">
              <button onClick={() => handleEditClick(todo)}>
                <img className="w-10" src={editIcon} alt="Edit" />
              </button>
              <button onClick={() => handleDeleteClick(todo)}>
                <img className="w-9" src={deleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
        ))}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
              <input
                type="text"
                value={selectedTodo?.todo || ""}
                onChange={(e) =>
                  setSelectedTodo({ ...selectedTodo, todo: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 text-white font-bold rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {isDeletePopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Are you sure you want to delete this todo?
              </h2>
              <p className="mb-4">{selectedTodo?.todo}</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closeDeletePopup}
                  className="bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 px-4 py-2 text-white font-bold rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
