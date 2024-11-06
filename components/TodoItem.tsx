"use client";

import { useState } from "react";
import { Todo } from "../types";
import {
  deleteTodoAction,
  updateTodoAction,
} from "../app/_actions/server-actions";
import EditTodoForm from "./EditTodoForm";
import toast from "react-hot-toast";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

   const handleDelete = async () => {
    await deleteTodoAction(todo.id);
    toast.success("Todo Deleted.");
  };

  const handleUpdate = async (title: string) => {
    await updateTodoAction(todo.id, { title });
    setIsEditing(false);
  };

  const handleToggleComplete = async () => {
    await updateTodoAction(todo.id, { completed: !todo.completed });
  };

  return (
    <div className="flex items-center justify-between rounded-md bg-white p-4 shadow">
      {isEditing ? (
        <EditTodoForm title={todo.title} onUpdate={handleUpdate} />
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="mr-4 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span
            className={`text-lg font-medium ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
        </div>
      )}
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-indigo-500 hover:text-indigo-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-sm text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
