import { IoMdAddCircle } from "react-icons/io";

import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const tododateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = tododateElement.current.value;
    onNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    tododateElement.current.value = "";
  };
  return (
    <div className="container items-container">
      <form onSubmit={handleAddButton} className="row my-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-3">
          <input ref={tododateElement} type="date" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success my-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
