import { FC } from "react"
import { TodosState } from "../store/todoSlice"
import { TodoItem } from "./todoItem"

interface TodoListProps extends TodosState { }



export const TodoList: FC<TodoListProps> = ({ todos }) => {
    return (
        <div>
            {todos?.map(todo => {

                return (
                    <TodoItem key={todo.id} todo={todo} />
                )

            })}
        </div>
    )
}