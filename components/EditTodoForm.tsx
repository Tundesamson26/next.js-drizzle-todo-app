"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface EditTodoFormProps {
  title: string;
  onUpdate: (title: string) => void;
}

const EditTodoForm = ({ title: initialTitle, onUpdate }: EditTodoFormProps) => {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      toast.success("Todo updated.");
      onUpdate(title);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
