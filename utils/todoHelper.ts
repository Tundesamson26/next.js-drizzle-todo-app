import { todos } from "../drizzle/schema";
import { db } from "../drizzle/db";
import { eq } from "drizzle-orm";
import { Todo } from "../types";

export const getTodos = async (): Promise<Todo[]> => {
  return db.select().from(todos);
};

export const addTodo = async (title: string): Promise<Todo> => {
  const [newTodo] = await db.insert(todos).values({ title }).returning();
  return newTodo;
};

export const updateTodo = async (
  id: number,
  updatedTodo: Partial<Todo>
): Promise<Todo | null> => {
  const [todo] = await db
    .update(todos)
    .set(updatedTodo)
    .where(eq(todos.id, id))
    .returning();
  return todo || null;
};

export const deleteTodo = async (id: number): Promise<Todo | null> => {
  const [deletedTodo] = await db
    .delete(todos)
    .where(eq(todos.id, id))
    .returning();
  return deletedTodo || null;
};
