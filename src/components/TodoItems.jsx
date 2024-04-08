import { MdDelete } from "react-icons/md";

const TodoItems = ({ items, onDeleteClick }) => {
  return (
    <>
      {items.map((item) => (
        <div className="container " key={item.Todo}>
          <div className="row my-row">
            <div className="col-6">{item.Todo}</div>
            <div className="col-3">{item.TodoDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger my-button"
                onClick={() => onDeleteClick(item.Todo)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItems;
