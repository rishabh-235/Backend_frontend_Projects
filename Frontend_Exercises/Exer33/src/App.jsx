import { useState, useContext } from "react";
import "./App.css";
import { TodoContext } from "./TodoProvider";

function App() {
  const [newTask, setNewTask] = useState("");
  const [updateIndex, setUpdateIndex] = useState();
  const [updateTask, setUpdateTask] = useState("");
  const { state, dispatch } = useContext(TodoContext);

  const handleChangeNewTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const handleUpdateTask = (index) => {
    setUpdateIndex(index);
    setUpdateTask(state[index]);
  };

  const handleChangeUpdateTask = (e) => {
    setUpdateTask(e.target.value);
  };

  return (
    <>
      <div className="roboto container">
        <div className="heading">
          <h1>ToDo List</h1>
          <h4>Context API & useReducer</h4>
        </div>
       
        <div className="create-task">
          <h2>New Task</h2>
          <input
            required
            className="new-input"
            onChange={handleChangeNewTaskInput}
            value={newTask}
            placeholder="Type Your New Task..."
            type="text"
          />
          <button
            onClick={() => {
              if (newTask === "") alert("Task Name can't be Empty");
              else dispatch({ type: "add", task: newTask });
              setNewTask("");
            }}
            className="add-button"
          >
            Add
          </button>
        </div>

        <div className="tasks-container">
          <h2>Your Tasks</h2>
          {state.length === 0 && <h2>No Task Added To Show...</h2>}
          {state.map((item, index) => {
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
                    <button
                      onClick={() => {
                        if (updateTask === "")
                          alert("Task Name can't be Empty");
                        else
                          dispatch({
                            type: "update",
                            index: index,
                            task: updateTask,
                          });

                        setUpdateIndex();
                      }}
                      className="save-button"
                    >
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
                        onClick={() =>
                          dispatch({ type: "delete", index: index })
                        }
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
