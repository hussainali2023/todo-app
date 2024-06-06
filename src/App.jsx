import { createBrowserRouter } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const router = createBrowserRouter([
  {
    path:"/",
    element: <TaskList/>
  },
  {
    path:"/task-input",
    element: <TaskInput/>
  }
])

export default router
