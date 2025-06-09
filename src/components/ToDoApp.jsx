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

  // 2. Delete Task Function
  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  // 3. Task Completed
  const handleTaskComplete = (index) => {
    const completedTaskList = taskList.filter((_, i) => i !== index);
    setIsComplete(!isComplete);
  };

  return (
    <>
      <TaskInput task={task} setTask={setTask} onAddTask={handleAddTask} />
      <TaskList
        taskList={taskList}
        onTaskComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default ToDoApp;
