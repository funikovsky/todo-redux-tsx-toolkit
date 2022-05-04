import { FC, useState } from 'react';
import { useAppDispatch } from '../hook';
import { v4 } from 'uuid';
import { addTodo } from '../store/todoSlice';

export const TodoForm: FC = () => {

    const [value, setValue] = useState('')

    const dispatch = useAppDispatch()


    const addTodoHandler = () => {

        const todoItem = {
            title: value,
            id: v4(),
            completed: false
        }

        if (!value) return
        dispatch(addTodo(todoItem))
        setValue('')

    }

    return (
        <div style={{ margin: 30 }}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                <button onClick={() => addTodoHandler()}>Add Todo</button>
            </form>
        </div>
    )

}