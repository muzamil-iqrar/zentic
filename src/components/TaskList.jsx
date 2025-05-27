const TaskList = ({ taskList }) => {
  return (
    <>
      {
        <div className="task-list-wrapper">
          <ul className="task-list">
            {taskList.map((task, index) => (
              <li className="task-list-item" key={index}>
                <div className="task-boolean">
                  <button className="btn task-complete"></button>
                  {task}
                </div>

                <button className="btn-secondary task-del">X</button>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default TaskList;
