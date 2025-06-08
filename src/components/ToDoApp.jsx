import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const ToDoApp = () => {
  // Usestate Hook
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  // Functions

  // 1. Add Task Function
  const handleAddTask = () => {
    if (task.trim() != "") {
      setTaskList([...taskList, task]);
      setTask("");

      console.log(taskList);
    }
  };

  // 2. Task Completete Function
  const handleTaskComplete = () => {
    setIsComplete(!isComplete);
    console.log("Status:", isComplete);
    console.log(taskList);
  };

  return (
    <>
      <TaskInput task={task} setTask={setTask} onAddTask={handleAddTask} />
      <TaskList
        taskList={taskList}
        onTaskComplete={handleTaskComplete}
        isComplete={isComplete}
      />
    </>
  );
};

export default ToDoApp;
