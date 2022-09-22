import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from 'uuid';


export default initialTodos => {

    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    }

    const removeTodo = todoId => {
        //filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        //call setTodos with new todo array
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        )
        setTodos(updatedTodos);
    }

    //returning as an object
    return {
        todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleTodo: toggleTodo,
        editTodo: editTodo
    }

}