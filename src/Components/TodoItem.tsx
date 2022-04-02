import React from "react";
import { Todo } from "../Models";
import { FaTrash, FaPen, FaThumbsUp } from "react-icons/fa";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  editTodo,
  completeTodo,
}) => {
  return (
    <div className="todos__single">
      <p
        className={
          !todo.isDone ? "todos__single__text" : "todos__single__text__complete"
        }
      >
        {todo.todo}
      </p>
      <span className="todos__single__icons__container">
        <FaPen onClick={() => editTodo(todo.id)} />
        <FaTrash onClick={() => deleteTodo(todo.id)} />
        <FaThumbsUp onClick={() => completeTodo(todo.id)} />
      </span>
    </div>
  );
};

export default TodoItem;
