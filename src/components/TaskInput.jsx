const TaskInput = () => {
  return (
    <>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Enter your task"
          name="Task Input"
          id="task-input"
          required
        />
        <label for="name" class="form__label">
          Task Input
        </label>
      </div>

      <div className="task-input-submit"></div>
      <input type="submit" value="Add Task" className="btn" />
    </>
  );
};

export default TaskInput;
