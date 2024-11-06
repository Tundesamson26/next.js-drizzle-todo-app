"use client";

import { useState } from "react";
import { addTodoAction } from "../app/_actions/server-actions";
import toast from "react-hot-toast";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      await addTodoAction(title);
      toast.success("Todo Added.");
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 my-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
