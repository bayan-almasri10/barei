"use client";

import { useState, useEffect } from "react";

export default function Todo() {
    const [todo, setToDo] = useState({});

    useEffect(async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const todo = await response.json()
        setToDo(todo);
    },[])
    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}