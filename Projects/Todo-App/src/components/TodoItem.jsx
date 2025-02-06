import styles from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";
function TodoItem({ todoName, tododate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row my-row ">
        <div className={`${styles.textAlignLeft} col-6`}>{todoName}</div>
        <div className={`${styles.textAlignLeft} col-4`}>{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
