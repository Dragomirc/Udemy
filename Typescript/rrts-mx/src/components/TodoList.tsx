import React from 'react';
import { Todo } from '../todo.model';

interface TodoListProps {
  items: Todo[];
  deleteTodo: (todoId: string) => void;
}
const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => {
        return (
          <li key={todo.id}>
            <span> {todo.text}</span>
            <button onClick={props.deleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
