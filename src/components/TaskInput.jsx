const TaskInput = ({ task, setTask, onAddTask }) => {
  return (
    <>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          value={task}
          placeholder="Enter your task"
          name="Task Input"
          id="task-input"
          required
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <label htmlFor="name" className="form__label">
          Task Input
        </label>
      </div>

      <div className="task-input-submit"></div>
      <button className="btn" onClick={onAddTask}>
        Add Task
      </button>
    </>
  );
};

export default TaskInput;
