import { FC, useState } from 'react';
import { useAppDispatch } from '../hook';
import { v4 } from 'uuid';
import { addTodo } from '../store/todoSlice';

type TodoHandlerType = () => void

export const TodoForm: FC = () => {

    const [value, setValue] = useState('')

    const dispatch = useAppDispatch()


    const addTodoHandler: TodoHandlerType = () => {

        const todoItem = {
            title: value,
            id: v4(),
            completed: false
        }

        if (!value) return
        dispatch(addTodo(todoItem))
        setValue('')

    }

    const handelKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'enter') {

            addTodoHandler()

        }
        
    }

    return (
        <div style={{ marginBottom: 30, marginTop:30, textAlign: 'center' }}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input value={value} onKeyDown={(e) => handelKeyDown(e)} onChange={(e) => setValue(e.target.value)} type="text" />
                <button onClick={() => addTodoHandler()}>Add Todo</button>
            </form>
        </div>
    )

}