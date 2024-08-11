import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../shared/db_connect";
import { useDispatch } from "react-redux";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        loading: true,
        error: "",
    },
    reducers: {
        retrieveTodos: (state, action) => {
            // console.log(action.payload);
            state.todos = [...action.payload];
            storeData(state.todos);
            state.loading = false;
        },
        addTodo: (state, action) => {
            const current = [...state.todos];
            state.todos = [action.payload, ...current];
            storeData(state.todos);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            const filteredTodos = state.todos.filter((res) => res.id !== id);
            state.todos = filteredTodos;
            storeData(state.todos);
        },
        markAsDone: (state, action) => {
            const id = action.payload;
            const selectedTodoIndex = state.todos.findIndex(
                (res) => res.id === id
            );
            state.todos[selectedTodoIndex].status === "1"
                ? (state.todos[selectedTodoIndex].status = "2")
                : (state.todos[selectedTodoIndex].status = "1");

            storeData(state.todos);
        },
    },
});
export const { addTodo, removeTodo, markAsDone, retrieveTodos } =
    todoSlice.actions;
export default todoSlice;
