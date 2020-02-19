import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      const filteredTodos = state.filter(
        (todo: Todo) => todo.id !== action.payload
      );
      return filteredTodos;
    default:
      return state;
  }
};
