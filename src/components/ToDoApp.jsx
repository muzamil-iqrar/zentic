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

      console.log(taskList);
    }
  };
  return (
    <>
      <TaskInput task={task} setTask={setTask} onAddTask={handleAddTask} />
      <TaskList taskList={["Task 1", "Task2", "Code React JS for 30 min"]} />
    </>
  );
};

export default ToDoApp;
