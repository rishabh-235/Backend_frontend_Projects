import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateIndex, setUpdateIndex] = useState();
  const [updateTask, setUpdateTask] = useState("");

  const handleAddTask = () => {
    setTask([...task, newTask]);
    setNewTask("");
  };

  const handleChangeNewTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const handleUpdateTask = (index) => {
    console.log(index);
    setUpdateIndex(index);
    setUpdateTask(task[index]);
  };

  const handleChangeUpdateTask = (e) => {
    setUpdateTask(e.target.value);
  };

  const handleSaveTask = () => {
    task[updateIndex] = updateTask;
    setTask([...task]);
    setUpdateIndex();
  };

  const handleDeleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="roboto container">
        <h1 className="heading">ToDo List</h1>
        <div className="create-task">
          <h2>New Task</h2>
          <input
            className="new-input"
            onChange={handleChangeNewTaskInput}
            value={newTask}
            placeholder="Type Your New Task..."
            type="text"
          />
          <button onClick={handleAddTask} className="add-button">
            Add
          </button>
        </div>

        <div className="tasks-container">
          <h2>Your Tasks</h2>
          {task.length === 0 && <h2>No Task Added To Show...</h2>}
          {task.map((item, index) => {
            return (
              <div key={index} className="task">
                {updateIndex === index ? (
                  <input
                    className="update-input"
                    onChange={handleChangeUpdateTask}
                    value={updateTask}
                    placeholder="Enter Your updated Task..."
                    type="text"
                  />
                ) : (
                  <p className="task-name">{item}</p>
                )}
                <div>
                  {updateIndex === index ? (
                    <button onClick={handleSaveTask} className="save-button">
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleUpdateTask(index)}
                        className="update-button"
                      >
                        Update
                      </button>{" "}
                      <button
                        onClick={()=>handleDeleteTask(index)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
