import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        },
    }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
export const selectTodos = (state) => state.todos.todos;
export default todoSlice.reducer