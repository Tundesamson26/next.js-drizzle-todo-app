import { Todo } from "../types";
import { getTodos } from "../utils/todoHelper";
import TodoItem from "./TodoItem";

const TodoList = async () => {
  const todos: Todo[] = await getTodos();

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
