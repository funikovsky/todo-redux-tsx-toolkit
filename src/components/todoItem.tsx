import { FC } from "react";
import { useAppDispatch } from "../hook"
import { completedTodo, removeTodo } from "../store/todoSlice";

import './todoItem.css'

interface TodoItemProps {
    todo: {
        title: string,
        id: string,
        completed: boolean
    }
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {

    const dispath = useAppDispatch();
    return (

        <div style={{ marginBottom: 20 }}>

            <button onClick={() => dispath(completedTodo(todo.id))}>Выполнено</button>
            <input type="checkbox" checked={todo.completed} onChange={() => dispath(completedTodo(todo.id))}/>
            <span className={todo.completed ? "completed" : ""} style={{ width: '8rem', display: 'inline-block',textAlign: 'center' }}>{todo.title}</span>
            <button onClick={() => dispath(removeTodo(todo.id))}>Удалить</button>

        </div>



    )
}