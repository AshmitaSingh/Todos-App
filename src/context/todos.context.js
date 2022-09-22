import React, {createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

// Giving some default values to the context
const defaultTodos = [
    {id:'1', task:'Pet Oraboni', completed: false},
    {id:'2', task:'Complete Context API', completed: false}
]

// creating context
export const TodosContext = createContext();
export const DispatchContext = createContext();

// defining context provider
export function TodosProvider(props) {
    // const todosStuff = useTodoState(defaultTodos);
    // const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}