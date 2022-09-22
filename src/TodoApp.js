import React from 'react';
import useTodoState from './hooks/useTodoState';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';

function TodoApp() {
    // const initialTodos = [
    //     { id: 1, task: 'Take Oraboni to walk', completed: false },
    //     { id: 2, task: 'Check mails', completed: true },
    //     { id: 3, task: 'Complete pending courses', completed: false },
    //     { id: 4, task: 'Buy groceries', completed: true }
    // ];

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;
