import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const ToDoApp = () => {
  // Usestate Hook
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Functions

  // 1. Add Task Function
  const handleAddTask = () => {
    if (task.trim() != "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };
  return (
    <>
      <TaskInput task={task} setTask={setTask} onAddTask={handleAddTask} />
      {/* <TaskList taskList="[Task 1 Added, Task 2 Added]" /> */}
    </>
  );
};

export default ToDoApp;
