export interface User {
  id: number;
  email: string;
  created_at: Date;
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  // user_id: number;
  createdAt: Date;
}
