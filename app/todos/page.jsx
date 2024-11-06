import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";

const Todos = () => {
  return (
    <main className="mx-auto max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-8">Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  );
};

export default Todos;
