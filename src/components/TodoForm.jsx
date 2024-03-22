import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContexts/TodoContext';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const {addTodo} = useTodo()
    const add = (e) => {
        e.preventDefault();
    
        if (!todo) return;
    
        addTodo({
            data: todo,
            completed: false
        });
        setTodo('');
    };
    
  return (
    <form onSubmit={add} className='flex items-center gap-2 sm:flex-row flex-col mb-4'>
        <input type="text" className="input" placeholder='Enter Todo' value={todo} onChange={e => setTodo(e.target.value)}/>
        <button type='submit' className='btn relative top-1'>Add</button>
    </form>
  )
}

export default TodoForm