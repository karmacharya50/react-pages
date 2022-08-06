import React from "react";

export default function TodoItem(probs) {
    console.log(probs);
    return (
        <div className="container">
            <h4>{probs.todo.title}</h4>
            <p>{probs.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={probs.onDelete(probs.todo)}>Delete</button>
        </div>
    )
}