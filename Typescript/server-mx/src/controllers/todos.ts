import { RequestHandler } from 'express';
import { Todo } from '../models/todos';
const TODOS: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body as { text: string };
  const todoIndex = TODOS.findIndex(todo => todo.id === id);
  if (todoIndex < 0) {
    throw new Error('Could not find the todo!');
  }
  TODOS[todoIndex].text = text;
  res.status(200).json({
    message: 'Todo succesfully updated',
    updatedTodo: TODOS[todoIndex]
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const todoIndex = TODOS.findIndex(todo => todo.id === id);
  if (todoIndex < 0) {
    throw new Error('Could not find the todo!');
  }
  TODOS.splice(todoIndex, 1);
  res.status(200).json({
    message: 'Todo succesfully deleted'
  });
};
