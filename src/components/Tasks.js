import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";
import "./card.css";

const Tasks = ({ task: incomingTask }) => {
  const { title, description, createdDate, taskId } = incomingTask;
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(incomingTask);

  const handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (isEditing) {
    return (
      <div className="card bg-white rounded shadow-md p-4 mb-4">
        <div className="content">
          <div className="ui form">
            <div className="field mb-2">
              <input
                type="text"
                spellCheck={false}
                placeholder="Task Title"
                name="title"
                onChange={handleInputChange}
                value={task.title}
                className="input"
              />
            </div>
            <div className="meta mb-2">{formatDate(createdDate)}</div>
            <div className="field">
              <textarea
                rows="2"
                spellCheck={false}
                placeholder="Task Description"
                name="description"
                onChange={handleInputChange}
                value={task.description}
                className="textarea"
              />
            </div>
          </div>
        </div>
        <div className="extra content flex justify-between mt-2">
          <button
            className="btn btn-green"
            onClick={() => {
              editTask(task);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button className="btn btn-red" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card bg-white rounded shadow-md p-4 mb-4">
        <div className="content">
          <div className="header font-bold text-xl mb-2">{title}</div>
          <div className="meta text-gray-500 mb-2">{formatDate(createdDate)}</div>
          <div className="description text-gray-700">{description}</div>
        </div>
        <div className="extra content flex justify-between mt-2">
          <button className="btn btn-green" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </button>
          <button className="btn btn-red" onClick={() => deleteTask(taskId)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default Tasks;
