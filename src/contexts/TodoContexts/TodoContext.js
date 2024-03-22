import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            data: 'Test Todo',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleCompleted: (id) => {}
});

export const TodoContextProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}


export default todoContext;