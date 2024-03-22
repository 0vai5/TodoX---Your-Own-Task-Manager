import React, { useEffect, useState } from 'react';
import { TodoContextProvider } from './contexts/TodoContexts/TodoContext';
import { parse, v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(existingTodo => [...existingTodo, { id: uuidv4(), ...todo }]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos(existingTodo => existingTodo.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )));
  };

  const toggleCompleted = (id) => {
    setTodos(existingTodo => existingTodo.map((prevTodo) => (
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
    )));
  };

  useEffect(() => {
   const parsedData = JSON.parse(localStorage.getItem(('todos')));
    setTodos(parsedData)
  } ,[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
        <section className='max-container'>
          <h1 className='head-text'>
            TodoX
          </h1>
          <h3 className='subhead-text'>Your Own <span className='blue-gradient_text'>Personal Task Manager</span></h3>
          <div>
            <TodoForm />
          </div>
          {todos.map((todo)=>(
            <div key={todo.id}>
              <TodoItems todo={todo} />
            </div>
          ))}
        </section>
      </TodoContextProvider>
    </>
  );
};

export default App;
