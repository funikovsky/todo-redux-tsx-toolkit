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
            <span className={todo.completed ? "completed" : ""} style={{ minWidth: 200, display: 'inline-block' }}>{todo.title}</span>
            <button onClick={() => dispath(removeTodo(todo.id))}>Удалить</button>


        </div>



    )
}