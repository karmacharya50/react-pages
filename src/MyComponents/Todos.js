import React from "react";
import TodoItem from "./TodoItem";


export default function Todos(probs) {
    const todolist = probs.todos_list;
    return (
        <div className="container">
            <h2 className="text-center">Todos List</h2>
            {probs.todos_list.map((todo) => {
                return <TodoItem todo={todo} onDelete={probs.onDelete} />
            })}
            {/* <TodoItem todo={todolist[0]} /> */}
        </div>
    )
}