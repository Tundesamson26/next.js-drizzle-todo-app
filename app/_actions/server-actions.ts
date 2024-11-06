"use server";

import { addTodo, updateTodo, deleteTodo } from "../../utils/todoHelper";
import { Todo } from "../../types";
import { revalidatePath } from "next/cache";

export const addTodoAction = async (title: string) => {
  await addTodo(title);
  revalidatePath('/');
};

export const updateTodoAction = async (id: number, updatedTodo: Partial<Todo>) => {
  await updateTodo(id, updatedTodo);
  revalidatePath('/');
};

export const deleteTodoAction = async (id: number) => {
  await deleteTodo(id);
  revalidatePath('/');
};
