import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/todoSlice';  
import Input from './Input';
import List from './List';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos.items);  
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo !== "") {
      dispatch(addTodo(todo));  
      setTodo("");
    }
  };

  const handleDeleteTodo = (todoText) => {
    dispatch(deleteTodo(todoText)); 
  };

  return (
    <div className="container mx-auto">
      <div className="bg-gray-700 w-full h-96 text-center mt-10">
        <Input todo={todo} setTodo={setTodo} addTodo={handleAddTodo} />
        <List list={todos} remove={handleDeleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
