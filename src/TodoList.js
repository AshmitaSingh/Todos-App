import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, index) => (
                        // To add a key to a fragment, we have to use the long-hand version
                        // rather than <> </>, we have to use <React.Fragment>
                        <React.Fragment key={index}>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            {index < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;
}

export default TodoList;
