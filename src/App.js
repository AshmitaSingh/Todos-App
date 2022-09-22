import './App.css';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;


// Downward dataflow
//  -TodoApp
//    -TodoForm
//    -TodoList
//      -TodoItem
