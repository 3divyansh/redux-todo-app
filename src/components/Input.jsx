import React from "react";

const Input = ({ todo, setTodo, addTodo }) => {
  return (
    <>
      <div>
        <h1 className="text-teal-600 font-semibold text-2xl py-6">
          REACT TODO APP
        </h1>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          typeof="text"
          className="placeholder:italic placeholder:text-slate-400  bg-white w-64 px-6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="rounded-md bg-white py-2 px-3 pl-9 pr-2 text-teal-600 text-bold"
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default Input;
