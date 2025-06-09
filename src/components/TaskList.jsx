import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const TaskList = ({ taskList, onTaskComplete, onDeleteTask, isComplete }) => {
  return (
    <>
      {
        <div className="task-list-wrapper">
          <ul className="task-list">
            {taskList.map((task, index) => (
              <li className="task-list-item" key={index}>
                <div className="task-boolean">
                  <button
                    id={index}
                    className={`btn task-complete ${
                      isComplete ? "completed" : ""
                    }`}
                    onClick={() => onTaskComplete(index)}
                  ></button>
                  {task}
                </div>

                <div className="action-buttons">
                  <button className="btn-del">
                    <MdDelete
                      className="icon-action"
                      onClick={() => onDeleteTask(index)}
                    />
                  </button>
                  <button className="btn-edit">
                    <MdEditSquare className="icon-action" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default TaskList;
