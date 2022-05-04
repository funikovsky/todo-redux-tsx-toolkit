import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {

    title: string,
    id: string,
    completed: boolean

}

export type TodosState = {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: []
};

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [action.payload, ...state.todos]
            // state.todos.push(action.payload)
        },
        completedTodo: (state, action: PayloadAction<string>) => {
            state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => {
                return todo.id !== action.payload


            })
        }
    }

})


export const { addTodo, completedTodo, removeTodo } = todoSlice.actions 